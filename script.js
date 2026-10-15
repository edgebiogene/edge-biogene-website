const IMG={"swab": "/images/swab.jpg", "syr": "/images/syr.jpg", "ins": "/images/ins.jpg", "ndl": "/images/ndl.jpg", "edta": "/images/edta.jpg", "urn": "/images/urn.jpg", "petri": "/images/petri.jpg", "tt": "/images/tt.jpg", "fp": "/images/fp.jpg", "esr": "/images/esr.jpg", "nit": "/images/nit.jpg", "lat": "/images/lat.jpg", "bnd": "/images/bnd.jpg", "strip": "/images/strip.jpg", "sharps": "/images/sharps.jpg", "slides": "/images/slides.jpg", "pipette": "/images/pipette.jpg", "clot": "/images/clot.jpg", "cotton1": "/images/cotton1.jpg", "cotton2": "/images/cotton2.jpg", "fist": "/images/fist.jpg", "cuvette": "/images/cuvette.jpg", "entero": "/images/entero.jpg", "aspen": "/images/aspen.jpg", "hepa": "/images/hepa.jpg", "trust": "/images/trust.jpg", "malaria": "/images/malaria.jpg", "tropi": "/images/tropi.jpg", "tropt": "/images/tropt.jpg"};
window.track=function(n,p){try{window.dataLayer=window.dataLayer||[];window.dataLayer.push(Object.assign({event:n},p||{}));if(window.gtag)window.gtag('event',n,p||{})}catch(e){}};
const RM=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
const io=('IntersectionObserver' in window)?new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.12}):null;
document.querySelectorAll('.rv').forEach(el=>io?io.observe(el):el.classList.add('in'));
// particle background (skipped for reduced motion)
const cv=document.getElementById('bg');
if(cv&&!RM){const cx=cv.getContext('2d');let W,H,pts=[];
function rs(){W=cv.width=innerWidth;H=cv.height=innerHeight;pts=Array.from({length:Math.min(60,W/22)},()=>({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4}))}
rs();addEventListener('resize',rs);
(function a(){cx.clearRect(0,0,W,H);pts.forEach((p,i)=>{p.x=(p.x+p.vx+W)%W;p.y=(p.y+p.vy+H)%H;cx.fillStyle='#2563eb';cx.beginPath();cx.arc(p.x,p.y,1.8,0,7);cx.fill();for(let j=i+1;j<pts.length;j++){const q=pts[j],d=Math.hypot(p.x-q.x,p.y-q.y);if(d<130){cx.strokeStyle='rgba(37,99,235,'+(1-d/130)*.3+')';cx.beginPath();cx.moveTo(p.x,p.y);cx.lineTo(q.x,q.y);cx.stroke()}}});requestAnimationFrame(a)})()}
// products page: chips + search (+ ?q= from hero search)
(function(){const g=document.getElementById('pg'),q=document.getElementById('q');if(!g||!q)return;let f='all';
const run=()=>{const s=q.value.toLowerCase();g.querySelectorAll('.pc').forEach(x=>x.classList.toggle('hide',(f!=='all'&&x.dataset.c!==f)||!x.dataset.t.includes(s)))};
q.oninput=()=>{run();if(q.value.length>2)track('search')};
document.getElementById('pt').onclick=e=>{const t=e.target.closest('.tab');if(!t)return;f=t.dataset.f;document.querySelectorAll('#pt .tab').forEach(x=>x.classList.toggle('on',x===t));run()};
const u=new URLSearchParams(location.search).get('q');if(u){q.value=u;run()}})();
// lightbox + analytics events (no personal data is sent)
const lb=document.getElementById('lb');
document.addEventListener('click',e=>{
const i=e.target.closest('.pc .im img');if(i&&lb){lb.querySelector('img').src=i.src;lb.classList.add('on');track('view_product');return}
if(lb&&e.target.closest('#lb')){lb.classList.remove('on');return}
const a=e.target.closest('a[href]');if(a){const h=a.getAttribute('href');if(h.indexOf('tel:')===0)track('click_call');else if(h.indexOf('whatsapp.com')>-1||h.indexOf('wa.me')>-1)track('click_whatsapp')}
if(e.target.closest('.ad'))track('quote_list_add')});
const hsf=document.querySelector('form.hsrch');if(hsf)hsf.addEventListener('submit',()=>track('search'));
// multi-line RFQ form
(function(){const f=document.getElementById('f');if(!f)return;const pl=document.getElementById('pl'),UN=['pcs','box','pack','kit','set','bottle','other'];
function row(n,q){const d=document.createElement('div');d.className='prow';d.innerHTML='<label class="fl"><input class="pn" placeholder=" " maxlength="120"><span>Product name *</span></label><label class="fl"><input class="pb" placeholder=" " maxlength="80"><span>Brand / model</span></label><label class="fl"><input class="pq" type="number" min="1" max="999999" placeholder=" "><span>Qty *</span></label><select class="pu" aria-label="Unit">'+UN.map(x=>'<option>'+x+'</option>').join('')+'</select><button type="button" class="rmv" aria-label="Remove product line">✕</button>';if(n)d.querySelector('.pn').value=n;if(q)d.querySelector('.pq').value=q;pl.appendChild(d)}
let cart={};try{cart=JSON.parse(localStorage.getItem('eb_cart')||'{}')}catch(e){}
const ks=Object.keys(cart).slice(0,20);if(ks.length){ks.forEach(k=>row(k,cart[k].q));const n=document.getElementById('fq');n.textContent='📋 '+ks.length+' item'+(ks.length>1?'s':'')+' from your quote list added below. You can edit them.';n.style.display='block'}else row();
document.getElementById('addrow').onclick=()=>{if(pl.children.length<20)row();else alert('Maximum 20 product lines. Please send longer lists on WhatsApp.')};
pl.addEventListener('click',e=>{if(e.target.classList.contains('rmv')&&pl.children.length>1)e.target.closest('.prow').remove()});
document.getElementById('types').addEventListener('click',e=>{const b=e.target.closest('.ty');if(!b)return;document.querySelectorAll('#types .ty').forEach(x=>x.classList.toggle('on',x===b))});
const sb=f.querySelector('button[type=submit]');let last='',lt=0;
f.addEventListener('submit',e=>{e.preventDefault();const g=id=>document.getElementById(id).value.trim(),er=document.getElementById('ferr');
const bad=m=>{er.textContent=m;er.style.display='block'};er.style.display='none';
if(g('hp'))return;
const ph=g('ph').replace(/[\s-]/g,'').replace(/^(\+91|91|0)/,'');
if(!g('fb')||!g('fn'))return bad('Please enter your business name and your name.');
if(!/^[6-9]\d{9}$/.test(ph))return bad('Please enter a valid 10-digit mobile number.');
if(g('em')&&!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(g('em')))return bad('Please enter a valid email address.');
if(!/^\d{6}$/.test(g('pin')))return bad('Please enter a 6-digit delivery PIN code.');
const rows=[...pl.querySelectorAll('.prow')].map(r=>({n:r.querySelector('.pn').value.trim(),b:r.querySelector('.pb').value.trim(),q:+r.querySelector('.pq').value,u:r.querySelector('.pu').value}));
if(rows.some(r=>!r.n||!(r.q>0)))return bad('Each product line needs a product name and a quantity.');
if(!document.getElementById('cons').checked)return bad('Please tick the consent box so we can contact you about this quotation.');
const ty=(document.querySelector('#types .ty.on')||{dataset:{v:''}}).dataset.v;
const t='*Request for Quotation - Edge Biogene*\nEnquiry type: '+ty+'\nBusiness: '+g('fb')+'\nContact person: '+g('fn')+'\nPhone: +91'+ph+'\nEmail: '+(g('em')||'-')+'\nDelivery PIN: '+g('pin')+'\n\n*Products:*\n'+rows.map((r,i)=>(i+1)+'. '+r.n+(r.b?' ('+r.b+')':'')+' - '+r.q+' '+r.u).join('\n')+(g('fnote')?'\n\nNotes: '+g('fnote'):'');
const dup=(t===last&&Date.now()-lt<60000);last=t;lt=Date.now();
sb.disabled=true;setTimeout(()=>{sb.disabled=false},4000);
const wl=document.getElementById('wl');wl.href='https://api.whatsapp.com/send?phone=917009350898&text='+encodeURIComponent(t);
document.getElementById('ml').href='mailto:sales.edgebiogene@gmail.com?subject='+encodeURIComponent('Quotation request from '+g('fb'))+'&body='+encodeURIComponent(t);
document.getElementById('st').classList.add('on');
if(!dup){track('rfq_submit',{lines:rows.length});track('generate_lead');wl.click()}})})();
(function(){
const $=id=>document.getElementById(id);
let cart={};try{cart=JSON.parse(localStorage.getItem('eb_cart')||'{}')}catch(e){}
const save=()=>{try{localStorage.setItem('eb_cart',JSON.stringify(cart))}catch(e){}};
const tot=()=>Object.values(cart).reduce((a,x)=>a+x.q,0);
function toast(t){const x=$('ts');x.textContent=t;x.classList.add('on');clearTimeout(toast.h);toast.h=setTimeout(()=>x.classList.remove('on'),1800)}
function render(){const ks=Object.keys(cart);$('cc').textContent=tot();$('tt').textContent=tot();
$('ci').innerHTML=ks.length?ks.map(t=>{const x=cart[t];return `<div class="it" data-t="${t}">${x.k&&IMG[x.k]?'<img alt="" src="'+IMG[x.k]+'">':'<div class="nt">📦</div>'}<div class="nm">${t}<div class="qr"><button class="qb" data-d="-1">−</button><input class="qi" type="number" min="1" value="${x.q}"><button class="qb" data-d="1">+</button></div></div><button class="rm" aria-label="Remove">🗑</button></div>`}).join(''):'<div class="emp">📋<br>Your quote list is empty.<br>Add products from the Products page.</div>'}
function open(o){$('cd').classList.toggle('on',o);$('co').classList.toggle('on',o);if(o)render()}
$('cb').onclick=()=>open(true);$('cx').onclick=$('co').onclick=()=>open(false);
$('cl').onclick=()=>{cart={};save();render();$('cs').style.display='none'};
const clamp=v=>Math.max(1,Math.min(99999,parseInt(v)||1));
// product cards
document.addEventListener('click',e=>{
const b=e.target.closest('.qb');
if(b){const i=b.parentNode.querySelector('.qi');i.value=clamp(+i.value+ +b.dataset.d);const it=b.closest('.it');if(it){cart[it.dataset.t].q=+i.value;save();$('cc').textContent=tot();$('tt').textContent=tot()}return}
const a=e.target.closest('.ad');
if(a){const c=a.closest('.pc,.p'),q=clamp(c.querySelector('.qi').value),t=a.dataset.t;
cart[t]={q:(cart[t]?cart[t].q:0)+q,k:c.dataset.k};save();render();c.querySelector('.qi').value=1;
const cb=$('cb');cb.classList.remove('bump');void cb.offsetWidth;cb.classList.add('bump');toast('✓ '+q+' × '+t+' added to quote list')}
const r=e.target.closest('.rm');if(r){delete cart[r.closest('.it').dataset.t];save();render()}});
document.addEventListener('change',e=>{if(e.target.classList.contains('qi')){e.target.value=clamp(e.target.value);const it=e.target.closest('.it');if(it){cart[it.dataset.t].q=+e.target.value;save();render()}}});
$('po').onclick=()=>{const ks=Object.keys(cart);
if(!ks.length){toast('Quote list is empty');return}
const n=$('cn').value.trim(),p=$('cp').value.trim();if(!n||!p){toast('Please enter name and phone');(n?$('cp'):$('cn')).focus();return}
const t='*Quotation Request - Edge Biogene*\nName: '+n+'\nPhone: '+p+'\nAddress: '+($('ca').value.trim()||'-')+'\n\n*Items:*\n'+ks.map((k,i)=>(i+1)+'. '+k+'  x '+cart[k].q).join('\n')+'\n\nTotal items: '+tot()+'\nPlease share wholesale price, availability and lead time.';
const w=$('cw');w.href='https://api.whatsapp.com/send?phone=917009350898&text='+encodeURIComponent(t);
$('cm').href='mailto:sales.edgebiogene@gmail.com?subject='+encodeURIComponent('Quotation request from '+n)+'&body='+encodeURIComponent(t);
$('cs').style.display='block';w.click()};
render();
})();


(function(){const n=document.querySelector('nav'),h=document.getElementById('hm');
function set(o){n.classList.toggle('open',o);h.textContent=o?'✕':'☰';h.setAttribute('aria-expanded',o);h.setAttribute('aria-label',o?'Close menu':'Open menu')}
h.addEventListener('click',()=>set(!n.classList.contains('open')));
n.querySelectorAll('ul a').forEach(a=>a.addEventListener('click',()=>set(false)));
document.addEventListener('click',e=>{if(!n.contains(e.target))set(false)});
addEventListener('resize',()=>{if(innerWidth>820)set(false)});
})();

