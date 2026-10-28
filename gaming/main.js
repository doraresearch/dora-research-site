import { venues } from './venues.js';
const images = import.meta.glob('./media/*.jpg', { eager: true, query: '?url', import: 'default' });
const imageFor = id => images[`./media/${id}.jpg`];
const arrow = '<svg aria-hidden="true"><use href="#arrow"/></svg>';
const roblox = 'https://www.roblox.com/games/96146435186709/';
const modal = document.querySelector('#modal');
const body = document.querySelector('#modal-body');
let filter = 'All';
let expanded = false;
const featured = ['canyon-kickoff','luma-cavern','summit-showdown'];
function openModal(html){body.innerHTML=html;modal.showModal();}
function renderVenues(){
 const list = filter==='All' ? (expanded ? venues : featured.map(id=>venues.find(v=>v.id===id))) : venues.filter(v=>v.period===filter);
 document.querySelector('#venue-grid').replaceChildren(...list.map(v=>{
  const card=document.createElement('button');card.className='venue-card';card.setAttribute('aria-label',`Explore ${v.name}`);
  card.innerHTML=`<img src="${imageFor(v.id)}" alt="${v.name}: ${v.setting.toLowerCase()} — actual Roblox gameplay" loading="lazy"><span class="venue-title"><h3>${v.name}</h3>${arrow}</span>`;
  card.onclick=()=>showVenue(v);return card;
 }));
 document.querySelector('#venue-count').textContent=filter==='All'&&!expanded?'A first look at the campaign · Real gameplay captures':`${list.length} venues · Real gameplay captures`;
 document.querySelector('#show-all').textContent=expanded&&filter==='All'?'Show featured venues':'Explore all 10 venues';
 document.querySelector('#show-all').insertAdjacentHTML('beforeend',arrow);
 document.querySelectorAll('[data-filter]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.filter===filter)));
}
function showVenue(v){openModal(`<img class="modal-art" src="${imageFor(v.id)}" alt="${v.name} gameplay"><div class="modal-content"><p class="modal-kicker">VENUE ${String(venues.indexOf(v)+1).padStart(2,'0')} / 10 · ${v.length} M PER LAP</p><h2 id="modal-title">${v.name}</h2><p>${v.tagline}</p><p>${v.setting}. ${v.focus}.</p><dl class="medals"><div><dt>Bronze</dt><dd>${v.bronze}</dd></div><div><dt>Silver</dt><dd>${v.silver}</dd></div><div><dt>Gold</dt><dd>${v.gold}</dd></div><div><dt>Author</dt><dd>${v.author}</dd></div></dl><p>Podium a race to unlock the next venue. Race solo against the clock or take on five AI rivals.</p><a class="button primary" href="${roblox}" target="_blank" rel="noopener noreferrer">Open on Roblox ${arrow}</a><p class="notice">Private playtest: your Roblox account needs access. Website previews do not unlock venues or start a race.</p></div>`);}
document.querySelectorAll('[data-filter]').forEach(b=>b.onclick=()=>{filter=b.dataset.filter;renderVenues();});
document.querySelector('#show-all').onclick=()=>{expanded=filter!=='All'||!expanded;filter='All';renderVenues();};
document.querySelector('.close').onclick=()=>modal.close();
modal.addEventListener('click',e=>{if(e.target===modal){const r=modal.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)modal.close();}});
const guide={
 throttle:{title:'FIND YOUR PACE.',copy:'Hold the throttle to reach 90 km/h. Cut between four lanes to find the clean line. On a jump, use pitch to manage the bike and line up the landing. A clean landing beats a spectacular crash.'},
 turbo:{title:'FAST COMES WITH HEAT.',copy:'Turbo takes you up to 110 km/h. Use it to make a move on a straight, then watch your heat. Push too far and the engine stalls for four seconds. Speed is a decision, not a button to hold forever.'},
 cooling:{title:'KEEP YOUR COOL.',copy:'Cooling gates bring the heat down so you can get back on the turbo. They occupy specific lanes, so plan your line before you arrive. Saltpan Scorch has only one cooling gate: make it count.'}
};
function showGuide(key){const g=guide[key];openModal(`<div class="modal-content"><p class="modal-kicker">RIDER SCHOOL</p><h2 id="modal-title">${g.title}</h2><p>${g.copy}</p><div class="guide-buttons">${Object.keys(guide).map(k=>`<button data-guide-tab="${k}" aria-pressed="${key===k}">${k==='cooling'?'Cooling gates':k[0].toUpperCase()+k.slice(1)}</button>`).join('')}</div><button class="button primary" id="guide-controls">See riding controls ${arrow}</button></div>`);body.querySelectorAll('[data-guide-tab]').forEach(b=>b.onclick=()=>{modal.close();showGuide(b.dataset.guideTab);});body.querySelector('#guide-controls').onclick=()=>{modal.close();showControls();};}
document.querySelectorAll('[data-guide]').forEach(b=>b.onclick=()=>showGuide(b.dataset.guide));
const controls={Keyboard:[['Throttle','W'],['Turbo','Space'],['Change lanes','A / D or ← / →'],['Pitch','↑ / ↓'],['Recover','Enter'],['Pause / Restart','Esc / R']],Gamepad:[['Throttle','A or right trigger'],['Turbo','B or left trigger'],['Change lanes','D-pad or left stick X'],['Pitch','Left stick Y'],['Recover','A'],['Pause','Start']],Touch:[['Throttle','Hold RIDE'],['Turbo','Hold TURBO'],['Change lanes','On-screen steering cluster'],['Pitch','On-screen pitch controls'],['Recover','RECOVER'],['Pause','Top-right pause button']]};
function showControls(device='Keyboard'){
 openModal(`<div class="modal-content"><p class="modal-kicker">HOW TO RIDE</p><h2 id="modal-title">YOUR LINE. YOUR CONTROLS.</h2><div class="control-tabs" role="group" aria-label="Control device">${Object.keys(controls).map(d=>`<button data-device="${d}" aria-pressed="${d===device}">${d}</button>`).join('')}</div><table class="controls-table" aria-label="${device} riding controls"><tbody>${controls[device].map(([a,b])=>`<tr><td>${a}</td><td>${b}</td></tr>`).join('')}</tbody></table><p class="notice">${device==='Keyboard'?'Keyboard bindings can be changed in the game’s Settings.':device==='Touch'?'The mirrored touch layout can be enabled in the game’s Settings.':'Gamepad controls use a fixed layout.'} Try Rider School in the game before your first race.</p></div>`);
 body.querySelectorAll('[data-device]').forEach(b=>b.onclick=()=>{const d=b.dataset.device;body.querySelectorAll('[data-device]').forEach(n=>n.setAttribute('aria-pressed',String(n===b)));body.querySelector('.controls-table').setAttribute('aria-label',`${d} riding controls`);body.querySelector('tbody').innerHTML=controls[d].map(([a,c])=>`<tr><td>${a}</td><td>${c}</td></tr>`).join('');body.querySelector('.notice').textContent=d==='Keyboard'?'Keyboard bindings can be changed in the game’s Settings. Try Rider School before your first race.':d==='Touch'?'The mirrored touch layout can be enabled in the game’s Settings. Try Rider School before your first race.':'Gamepad controls use a fixed layout. Try Rider School before your first race.';});
}
document.querySelector('#controls').onclick=()=>showControls();
const liveries=[['Ridge Teal','#19b8b0'],['Factory Red','#c1352a'],['Racing Blue','#1f4e8c'],['Team Yellow','#f2b705'],['Ridge Green','#2e6b4f'],['Stealth Black','#121316']];
liveries.forEach(([name,color],i)=>{const b=document.createElement('button');b.style.setProperty('--swatch',color);b.setAttribute('aria-label',name);b.setAttribute('aria-pressed',String(i===0));b.title=name;b.onclick=()=>{document.querySelectorAll('#swatches button').forEach(n=>n.setAttribute('aria-pressed',String(n===b)));document.querySelector('#livery-name').textContent=name.toUpperCase();};document.querySelector('#swatches').append(b);});
renderVenues();
