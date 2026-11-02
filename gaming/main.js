import { venues } from './venues.js';
import { installMotion } from './motion.js';
const images = import.meta.glob('./media/*.jpg', { eager: true, query: '?url', import: 'default' });
const imageFor = id => images[`./media/${id}.jpg`];
const arrow = '<svg aria-hidden="true"><use href="#arrow"/></svg>';
const roblox = 'https://www.roblox.com/games/96146435186709/';
const modal = document.querySelector('#modal');
const body = document.querySelector('#modal-body');
const featured = ['canyon-kickoff', 'harvest-ridge', 'pine-run'];
const freshFrames = { 'canyon-kickoff': 'track-redline-v3', 'harvest-ridge': 'track-harvest-v3', 'pine-run': 'track-splinter-v3' };
const venueImage = v => imageFor(freshFrames[v.id] || v.id);
function openModal(html) {
  if (modal.open) modal.close();
  modal.classList.remove('film-dialog');
  body.innerHTML = html;
  modal.showModal();
}
function showVenue(v) {
  openModal(`<img class="modal-art" src="${venueImage(v)}" alt="${v.name} ${freshFrames[v.id] ? 'development footage' : 'gameplay capture'}"><div class="modal-content"><p class="modal-kicker">VENUE ${String(venues.indexOf(v) + 1).padStart(2, '0')} / 10 · ${v.length} M PER LAP</p><h2 id="modal-title">${v.name}</h2><p>${v.tagline}</p><p>${v.setting}. ${v.focus}.</p><dl class="medals"><div><dt>Bronze</dt><dd>${v.bronze}</dd></div><div><dt>Silver</dt><dd>${v.silver}</dd></div><div><dt>Gold</dt><dd>${v.gold}</dd></div><div><dt>Author</dt><dd>${v.author}</dd></div></dl><p>Podium a race to unlock the next venue. Race solo against the clock or take on five AI rivals.</p><a class="button primary" href="${roblox}" target="_blank" rel="noopener noreferrer">Open on Roblox ${arrow}</a><p class="notice">Private playtest: your Roblox account needs access. Website previews do not unlock venues or start a race.</p></div>`);
}
function selectVenue(v) {
  const image = document.querySelector('#selected-image');
  image.onload = () => {
    if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      image.animate([{ opacity: .65 }, { opacity: 1 }], { duration: 220, easing: 'ease-out' });
    }
  };
  image.src = venueImage(v);
  image.alt = `${v.name} ${freshFrames[v.id] ? 'development footage' : 'gameplay capture'}`;
  document.querySelector('#selected-media-label').textContent = freshFrames[v.id] ? 'Development footage' : 'Gameplay capture';
  document.querySelector('#selected-description').textContent = `${v.setting}. ${v.focus}.`;
  document.querySelector('#selected-index').textContent = `${String(venues.indexOf(v) + 1).padStart(2, '0')} / 10`;
  document.querySelector('#selected-name').textContent = v.name;
  document.querySelector('#selected-tagline').textContent = v.tagline;
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelector('.track-detail').animate([{ opacity: .6 }, { opacity: 1 }], { duration: 180, easing: 'ease-out' });
  }
  document.querySelectorAll('[data-venue]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.venue === v.id)));
}
featured.forEach(id => {
  const v = venues.find(venue => venue.id === id);
  const button = document.createElement('button');
  button.dataset.venue = id;
  button.setAttribute('aria-label', `Preview ${v.name}`);
  button.innerHTML = `<img src="${venueImage(v)}" alt="" loading="lazy"><span><small>${String(venues.indexOf(v) + 1).padStart(2, '0')}</small><strong>${v.name}</strong></span>`;
  button.onclick = () => selectVenue(v);
  document.querySelector('.venue-rail').append(button);
});
selectVenue(venues[0]);
document.querySelector('#all-venues').onclick = () => {
  openModal('<div class="modal-content"><p class="modal-kicker">THE CAMPAIGN</p><h2 id="modal-title">Ten venues. One more run.</h2><p>From Redline Mesa to Frostbite Ridge. Podium a race to open the next venue.</p><div class="catalog"></div></div>');
  venues.forEach(v => {
    const button = document.createElement('button');
    button.innerHTML = `<img src="${venueImage(v)}" alt="${v.name} ${freshFrames[v.id] ? 'development footage' : 'gameplay capture'}" loading="lazy"><span>${v.name}</span>`;
    button.onclick = () => showVenue(v);
    document.querySelector('.catalog').append(button);
  });
};
document.querySelector('.close').onclick = () => modal.close();
modal.addEventListener('click', e => {
  if (e.target !== modal) return;
  const r = modal.getBoundingClientRect();
  if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) modal.close();
});
installMotion({ modal, body });
