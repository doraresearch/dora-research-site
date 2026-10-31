import { venues } from './venues.js';
import { installMotion } from './motion.js';
const images = import.meta.glob('./media/*.jpg', { eager: true, query: '?url', import: 'default' });
const imageFor = id => images[`./media/${id}.jpg`];
const arrow = '<svg aria-hidden="true"><use href="#arrow"/></svg>';
const roblox = 'https://www.roblox.com/games/96146435186709/';
const modal = document.querySelector('#modal');
const body = document.querySelector('#modal-body');
const featured = ['canyon-kickoff', 'luma-cavern', 'summit-showdown'];
let selected = venues[0];
function openModal(html) {
  if (modal.open) modal.close();
  modal.classList.remove('film-dialog');
  body.innerHTML = html;
  modal.showModal();
}
function showVenue(v) {
  openModal(`<img class="modal-art" src="${imageFor(v.id)}" alt="${v.name} gameplay"><div class="modal-content"><p class="modal-kicker">VENUE ${String(venues.indexOf(v) + 1).padStart(2, '0')} / 10 · ${v.length} M PER LAP</p><h2 id="modal-title">${v.name}</h2><p>${v.tagline}</p><p>${v.setting}. ${v.focus}.</p><dl class="medals"><div><dt>Bronze</dt><dd>${v.bronze}</dd></div><div><dt>Silver</dt><dd>${v.silver}</dd></div><div><dt>Gold</dt><dd>${v.gold}</dd></div><div><dt>Author</dt><dd>${v.author}</dd></div></dl><p>Podium a race to unlock the next venue. Race solo against the clock or take on five AI rivals.</p><a class="button primary" href="${roblox}" target="_blank" rel="noopener noreferrer">Open on Roblox ${arrow}</a><p class="notice">Private playtest: your Roblox account needs access. Website previews do not unlock venues or start a race.</p></div>`);
}
function selectVenue(v) {
  selected = v;
  const image = document.querySelector('#selected-image');
  image.src = v.id === 'canyon-kickoff' ? imageFor('rivet-hero') : imageFor(v.id);
  image.alt = `${v.name} ${v.id === 'canyon-kickoff' ? 'promotional artwork' : 'actual gameplay'}`;
  document.querySelector('#selected-media-label').textContent = v.id === 'canyon-kickoff' ? 'Promotional artwork' : 'Actual gameplay';
  document.querySelector('#selected-description').textContent = `${v.setting}. ${v.focus}.`;
  document.querySelector('#selected-index').textContent = `${String(venues.indexOf(v) + 1).padStart(2, '0')} / 10`;
  document.querySelector('#selected-name').textContent = v.name;
  document.querySelector('#selected-tagline').textContent = v.tagline;
  document.querySelector('#selected-venue').setAttribute('aria-label', `Explore ${v.name}`);
  document.querySelectorAll('[data-venue]').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.venue === v.id)));
}
featured.forEach(id => {
  const v = venues.find(venue => venue.id === id);
  const button = document.createElement('button');
  button.dataset.venue = id;
  button.setAttribute('aria-label', `Preview ${v.name}`);
  button.innerHTML = `<img src="${imageFor(id === 'canyon-kickoff' ? 'rivet-hero' : id)}" alt="" loading="lazy"><span><small>${String(venues.indexOf(v) + 1).padStart(2, '0')}</small><strong>${v.name}</strong></span>`;
  button.onclick = () => selectVenue(v);
  document.querySelector('.venue-rail').append(button);
});
selectVenue(selected);
document.querySelector('#selected-venue').onclick = () => showVenue(selected);
document.querySelector('#all-venues').onclick = () => {
  openModal('<div class="modal-content"><p class="modal-kicker">THE CAMPAIGN</p><h2 id="modal-title">Ten venues. One more run.</h2><p>From Canyon Kickoff to Summit Showdown. Podium a race to open the next venue.</p><div class="catalog"></div></div>');
  venues.forEach(v => {
    const button = document.createElement('button');
    button.innerHTML = `<img src="${imageFor(v.id)}" alt="${v.name} actual gameplay" loading="lazy"><span>${v.name}</span>`;
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
