import filmPoster from './media/film-poster.jpg';

// Ambient clips are silent, optional, and paused offscreen. The full film
// loads only after a deliberate click and uses the browser's media controls.
export function installMotion({ modal, body }) {
  const hero = document.querySelector('#hero-video');
  const toggle = document.querySelector('#motion-toggle');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');
  const saveData = navigator.connection?.saveData === true;
  let motionEnabled = !reduced.matches && !saveData;
  let heroVisible = true;

  function attachSource(video) {
    if (!video.getAttribute('src')) {
      video.src = video.dataset.src;
      video.load();
    }
  }
  function playSilently(video) {
    attachSource(video);
    video.muted = true;
    video.play().catch(error => {
      if (error.name === 'AbortError') return;
      // Autoplay may be blocked by browser or battery preferences. Keep the
      // poster visible and offer an explicit action instead of a broken state.
      if (video === hero) {
        motionEnabled = false;
        updateToggle();
      }
    });
  }
  function updateToggle() {
    toggle.setAttribute('aria-pressed', String(motionEnabled));
    toggle.setAttribute('aria-label', motionEnabled ? 'Pause background video' : 'Play background video');
    toggle.querySelector('.motion-label').textContent = motionEnabled ? 'Pause motion' : 'Play motion';
    toggle.querySelector('.motion-icon').textContent = motionEnabled ? 'Ⅱ' : '▶';
  }
  function syncMotion() {
    const allowed = motionEnabled && !document.hidden && !modal.open;
    if (allowed && heroVisible) playSilently(hero);
    else hero.pause();
  }
  function bindPlayingState(video, container) {
    video.addEventListener('playing', () => container.classList.add('is-playing'));
    video.addEventListener('pause', () => container.classList.remove('is-playing'));
    video.addEventListener('error', () => {
      container.classList.remove('is-playing');
      if (video === hero) {
        motionEnabled = false;
        updateToggle();
      }
    });
  }
  bindPlayingState(hero, document.querySelector('.hero-media'));
  hero.addEventListener('playing', () => { document.querySelector('#hero-source').textContent = 'Actual in-game footage'; });
  hero.addEventListener('pause', () => { document.querySelector('#hero-source').textContent = 'Cinematic key art'; });
  toggle.onclick = () => {
    motionEnabled = !motionEnabled;
    updateToggle();
    syncMotion();
  };
  new IntersectionObserver(entries => {
    heroVisible = entries[0].isIntersecting;
    syncMotion();
  }, { threshold: 0.1 }).observe(document.querySelector('.hero'));
  document.addEventListener('visibilitychange', syncMotion);
  reduced.addEventListener('change', () => {
    motionEnabled = !reduced.matches && !saveData;
    updateToggle();
    syncMotion();
  });
  new MutationObserver(syncMotion).observe(modal, { attributes: true, attributeFilter: ['open'] });
  modal.addEventListener('close', () => {
    modal.querySelectorAll('video').forEach(video => video.pause());
    syncMotion();
  });
  document.querySelectorAll('[data-film]').forEach(button => {
    button.onclick = () => {
      if (modal.open) modal.close();
      hero.pause();
      modal.classList.add('film-dialog');
      body.innerHTML = `<video class="film-player" controls playsinline preload="metadata" poster="${filmPoster}" aria-label="Rivet Ridge Rally gameplay film"><source src="/video/rivet-film.mp4" type="video/mp4"><track kind="captions" src="/video/rivet-film.vtt" srclang="en" label="English">Your browser does not support video. <a href="/video/rivet-film.mp4">Open the gameplay film</a>.</video><div class="film-description"><h2 id="modal-title">One more run.</h2><p>45 seconds of real Rivet Ridge Rally gameplay. Sound on for engines, turbo, landings, and the finish line. No voice-over.</p></div>`;
      modal.showModal();
      // This is called within the click gesture; sound is never autoplayed
      // by ambient previews. Native controls remain available if blocked.
      modal.querySelector('video').play().catch(() => {});
    };
  });
  updateToggle();
  syncMotion();
}
