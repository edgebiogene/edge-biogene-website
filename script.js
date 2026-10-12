const P=[["Sterilized Urine Container 30/50 ml","lab"],["Petri Dish","lab"],["Glass Test Tube","lab"],["Filter Paper","lab"],["Microscope Glass Slides","lab"],["Plastic Pipette","lab"],["Disposable ESR Tube","lab"],["Sterilized Swab Stick","lab"],
["Vacuum Blood Collection Needle","blood"],["EDTA Blood Collection Tube","blood"],["Clot Activator (Plain) Tube","blood"],["Pediatric Blood Tubes","blood"],["Syringe 3 ml / 5 ml","blood"],["Insulin Syringe","blood"],
["HIV / HBsAg / HCV Rapid Tests","test"],["Malaria Pf/Pv Antigen Test","test"],["Typhoid IgM (Enterocheck)","test"],["Syphilis Rapid Test","test"],["Troponin I & Troponin T","test"],["10 Parameter Urine Strips","test"],["Hemoglobin Cuvettes","test"],
["Nitrile Gloves (M / L)","care"],["Latex Examination Gloves","care"],["Absorbent Cotton Roll 500 g","care"],["Adhesive Spot Bandage","care"],["Sharps Waste Container","care"]];
const KM={"Sterilized Urine Container 30/50 ml":"urn","Petri Dish":"petri","Glass Test Tube":"tt","Filter Paper":"fp","Microscope Glass Slides":"slides","Plastic Pipette":"pipette","Disposable ESR Tube":"esr","Sterilized Swab Stick":"swab","Vacuum Blood Collection Needle":"ndl","EDTA Blood Collection Tube":"edta","Clot Activator (Plain) Tube":"clot","Pediatric Blood Tubes":"edta","Syringe 3 ml / 5 ml":"syr","Insulin Syringe":"ins","HIV / HBsAg / HCV Rapid Tests":"hepa","Malaria Pf/Pv Antigen Test":"malaria","Typhoid IgM (Enterocheck)":"entero","Troponin I & Troponin T":"tropi","10 Parameter Urine Strips":"strip","Hemoglobin Cuvettes":"cuvette","Nitrile Gloves (M / L)":"nit","Latex Examination Gloves":"lat","Absorbent Cotton Roll 500 g":"cotton1","Adhesive Spot Bandage":"bnd","Sharps Waste Container":"sharps"};
const pr=document.getElementById('prods');
P.forEach(([t,c])=>{const d=document.createElement('div');d.className='p rv';d.dataset.c=c;d.dataset.k=KM[t]||'';d.innerHTML='<b>'+t+'</b><div class="qr"><button class="qb" data-d="-1" aria-label="Decrease">−</button><input class="qi" type="number" min="1" max="99999" value="1" aria-label="Quantity"><button class="qb" data-d="1" aria-label="Increase">+</button></div><button class="btn ad" data-t="'+t+'">📋 Add to Quote</button>';pr.appendChild(d)});
document.getElementById('tabs').onclick=e=>{const f=e.target.dataset.f;if(!f)return;document.querySelectorAll('.tab').forEach(x=>x.classList.toggle('on',x===e.target));pr.querySelectorAll('.p').forEach(p=>{p.classList.toggle('hide',f!=='all'&&p.dataset.c!==f);p.classList.add('in')})};
pr.onclick=e=>{const q=e.target.dataset.q;if(q){const m=document.getElementById('m');m.value=(m.value?m.value+'\n':'')+'• '+q+' – Qty: '}};
document.getElementById('f').addEventListener('submit',e=>{e.preventDefault();
const g=id=>document.getElementById(id).value.trim();
let ci='';try{const c=JSON.parse(localStorage.getItem('eb_cart')||'{}'),k=Object.keys(c);if(k.length)ci='\n\nQuote list:\n'+k.map((x,i)=>(i+1)+'. '+x+' x '+c[x].q).join('\n')}catch(x){}
const t='*Request for Quotation - Edge Biogene*\nName: '+g('n')+'\nCompany: '+(g('co')||'-')+'\nPhone: '+g('ph')+'\nEmail: '+(g('em')||'-')+'\nCity/PIN: '+(g('ct')||'-')+'\nRequirement:\n'+g('m')+ci;
const u='https://api.whatsapp.com/send?phone=917009350898&text='+encodeURIComponent(t);
const wl=document.getElementById('wl');wl.href=u;
document.getElementById('ml').href='mailto:sales.edgebiogene@gmail.com?subject='+encodeURIComponent('Quotation request from '+g('n'))+'&body='+encodeURIComponent(t);
document.getElementById('st').style.display='block';
wl.click();});
// hero search -> products page
(function(){const go=()=>{const v=document.getElementById('hq').value;location.hash='#/products';setTimeout(()=>{const q=document.getElementById('q');q.value=v;q.dispatchEvent(new Event('input'))},60)};document.getElementById('hb').onclick=go;document.getElementById('hq').onkeydown=e=>{if(e.key==='Enter')go()}})();
const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.12});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));
const co=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){const el=x.target,n=+el.dataset.n;let i=0;const s=setInterval(()=>{i+=Math.ceil(n/40);if(i>=n){i=n;clearInterval(s)}el.textContent=i+(n>=500?'+':'')},35);co.unobserve(el)}}));
document.querySelectorAll('[data-n]').forEach(el=>co.observe(el));
// particle background
const cv=document.getElementById('bg'),cx=cv.getContext('2d');let W,H,pts=[];
function rs(){W=cv.width=innerWidth;H=cv.height=innerHeight;pts=Array.from({length:Math.min(60,W/22)},()=>({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.4,vy:(Math.random()-.5)*.4}))}
rs();addEventListener('resize',rs);
(function a(){cx.clearRect(0,0,W,H);pts.forEach((p,i)=>{p.x=(p.x+p.vx+W)%W;p.y=(p.y+p.vy+H)%H;cx.fillStyle='#2563eb';cx.beginPath();cx.arc(p.x,p.y,1.8,0,7);cx.fill();for(let j=i+1;j<pts.length;j++){const q=pts[j],d=Math.hypot(p.x-q.x,p.y-q.y);if(d<130){cx.strokeStyle='rgba(37,99,235,'+(1-d/130)*.3+')';cx.beginPath();cx.moveTo(p.x,p.y);cx.lineTo(q.x,q.y);cx.stroke()}}});requestAnimationFrame(a)})();


const IMG={
 "swab": "images/swab.svg",
 "syr": "images/syr.svg",
 "ins": "images/ins.svg",
 "ndl": "images/ndl.svg",
 "edta": "images/edta.svg",
 "urn": "images/urn.svg",
 "petri": "images/petri.svg",
 "tt": "images/tt.svg",
 "fp": "images/fp.svg",
 "esr": "images/esr.svg",
 "nit": "images/nit.svg",
 "lat": "images/lat.svg",
 "bnd": "images/bnd.svg",
 "strip": "images/strip.svg",
 "sharps": "images/sharps.svg",
 "slides": "images/slides.svg",
 "pipette": "images/pipette.svg",
 "clot": "images/clot.svg",
 "cotton1": "images/cotton1.svg",
 "cotton2": "images/cotton2.svg",
 "fist": "images/fist.svg",
 "cuvette": "images/cuvette.svg",
 "entero": "images/entero.svg",
 "aspen": "images/aspen.svg",
 "hepa": "images/hepa.svg",
 "trust": "images/trust.svg",
 "malaria": "images/malaria.svg",
 "tropi": "images/tropi.svg",
 "tropt": "images/tropt.svg",
 "fist": "images/fist.svg",
 "cat-equipment": "images/cat-equipment.svg",
 "cat-diagnostic": "images/cat-diagnostic.svg",
 "cat-hospital": "images/cat-hospital.svg",
 "cat-consumables": "images/cat-consumables.svg",
 "cat-reagents": "images/cat-reagents.svg",
 "cat-test-kits": "images/cat-test-kits.svg",
 "cat-hospital-consumables": "images/cat-hospital-consumables.svg"
};
const PR=[["Plain Blood Tube 4 ml (Clot Activator)", "blood", "Red-top vacuum tube for serum and biochemistry tests.", "clot"], ["Disposable Syringe 3 ml / 5 ml", "blood", "Single-use sterile syringes (3 ml, 5 ml), EO sterilised.", "syr"], ["Insulin Syringe 1 ml (40 IU)", "blood", "Fine-needle insulin syringes with clear graduation.", "ins"], ["Vacuum Blood Collection Needle", "blood", "Multi-sample venous blood collection needles.", "ndl"], ["EDTA Blood Collection Tubes (K2 EDTA)", "blood", "Lavender-top vacuum tubes for haematology tests.", "edta"], ["Microscope Glass Slides", "lab", "Imported ground-edge glass slides, box pack.", "slides"], ["Plastic Pipette 1 ml", "lab", "Graduated disposable transfer pipettes for lab use.", "pipette"], ["Sterile Urine / Sample Container", "lab", "Sterile screw-cap containers in 30 ml and 50 ml.", "urn"], ["Petri Dish", "lab", "Clear glass petri dishes with lid for culture work.", "petri"], ["Glass Test Tube", "lab", "Round-bottom borosilicate glass test tubes.", "tt"], ["Filter Paper", "lab", "Laboratory filter paper circles for filtration.", "fp"], ["ESR / Graduated Glass Tubes", "lab", "Graduated borosilicate glass tubes for ESR and lab measurement.", "esr"], ["Sterilized Swab Stick", "lab", "Sterile swab sticks in tube for sample collection.", "swab"], ["Hemoglobin Cuvettes (DiaSpect)", "test", "Germany-made cuvettes for DiaSpect haemoglobin analyser.", "cuvette"], ["Enterocheck-WB (Typhoid IgM)", "test", "Rapid test for S. typhi IgM antibodies in serum, plasma or whole blood.", "entero"], ["Aspen Rapid Immunoassay Test", "test", "Rapid screening test cards, single-use.", "aspen"], ["Hepacard \u2013 HBsAg Test", "test", "Hepatitis B surface antigen rapid test, sensitivity 0.5 ng/ml.", "hepa"], ["Trustline Rapid Tests", "test", "Range of rapid diagnostic tests by Athenese-Dx.", "trust"], ["Malaria Pf/Pv Antigen Rapid Test", "test", "Trustline rapid test for detecting P. falciparum / P. vivax.", "malaria"], ["Troponin-I Rapid Test (Oscar)", "test", "Qualitative cardiac Troponin-I test, 10 tests per box.", "tropi"], ["Troponin T Sensitive (Roche cobas)", "test", "Roche cobas Troponin T sensitive reagent pack.", "tropt"], ["10 Parameter Urine Strips", "test", "Urinalysis reagent strips with colour chart bottle.", "strip"], ["Sharps Waste Container", "care", "Puncture-proof biomedical sharps disposal box with secure lid.", "sharps"], ["Absorbent Cotton Wool I.P. 500 g", "care", "Premium absorbent cotton roll, hospital and lab grade.", "cotton1"], ["Absorbent Cotton Wool I.P./B.P. 500 g", "care", "100% pure white, hydrogen peroxide bleached cotton rolls.", "fist"], ["Absorbent Cotton \u2013 Bulk Pack", "care", "Bulk 500 g cotton bags for wholesale supply.", "cotton2"], ["Nitrile Gloves, Powder Free (M / L)", "care", "Blue disposable nitrile examination gloves, latex free.", "nit"], ["Latex Examination Gloves", "care", "Single-use latex examination gloves for hospital and lab.", "lat"], ["Adhesive Spot Bandage (Medicated Dressings)", "care", "Round medicated spot dressings, 100 pcs per box.", "bnd"]],NI=[];
const CT=["syr", "ins", "ndl", "edta", "urn", "petri", "tt", "fp", "esr", "nit", "lat", "bnd", "strip", "swab"];
const CL={lab:'Lab Ware',blood:'Blood Collection',test:'Test Kits',care:'Care & Safety'};
const pg=document.getElementById('pg');
const card=(t,c,d,i,e)=>`<div class="pc" data-k="${i||''}" data-c="${c}" data-t="${t.toLowerCase()}"><div class="im ${i?'':'ph'} ${CT.includes(i)?'ct':''}">${i?'<img loading="lazy" alt="'+t+'" src="'+IMG[i]+'">':e}</div><div class="bd"><small>${CL[c]}</small><h3>${t}</h3><p>${d||'Available in bulk. Brand and size as per your requirement.'}</p><div class="qr"><button class="qb" data-d="-1" aria-label="Decrease">−</button><input class="qi" type="number" min="1" max="99999" value="1" aria-label="Quantity"><button class="qb" data-d="1" aria-label="Increase">+</button></div><button class="btn ad" data-t="${t}">📋 Add to Quote</button></div></div>`;
pg.innerHTML=PR.map(p=>card(p[0],p[1],p[2],p[3])).join('')+NI.map(p=>card(p[0],p[1],'',null,p[2])).join('');
function flt(){const f=document.querySelector('#pt .on').dataset.f,q=document.getElementById('q').value.toLowerCase();pg.querySelectorAll('.pc').forEach(x=>x.classList.toggle('hide',(f!=='all'&&x.dataset.c!==f)||!x.dataset.t.includes(q)))}
document.getElementById('pt').onclick=e=>{if(e.target.dataset.f){document.querySelectorAll('#pt .tab').forEach(x=>x.classList.toggle('on',x===e.target));flt()}};
document.getElementById('q').oninput=flt;
const lb=document.getElementById('lb');
pg.addEventListener('click',e=>{if(e.target.tagName==='IMG'){lb.querySelector('img').src=e.target.src;lb.classList.add('on')}const q=e.target.dataset.q;if(q){const m=document.getElementById('m');m.value=(m.value?m.value+'\n':'')+'• '+q+' – Qty: '}});
lb.onclick=()=>lb.classList.remove('on');

/* ===== CATEGORY PAGES ===== */
const DEF='Available on enquiry. Brand, model and specification as per your requirement.';
const CATS2=[
['lab-equipment','Laboratory Equipment','🔬','Microscopes, centrifuges, incubators, sterilisation and measuring equipment for laboratories.','cat-equipment.svg'],
['analyzers','Analyzers & Machines','⚙️','Hematology, biochemistry, electrolyte, coagulation, immunoassay analyzers and other diagnostic machines.','cat-diagnostic.svg'],
['hospital-equipment','Hospital Equipment','🏥','Patient monitoring, emergency, respiratory and general hospital equipment and furniture.','cat-hospital.svg'],
['reagents','Reagents & Chemicals','🧴','Biochemistry, hematology and serology reagents, stains, culture media, calibrators and controls.','cat-reagents.svg'],
['test-kits','Diagnostic Test Kits','🧪','Rapid test kits and cardiac markers from leading brands.','cat-test-kits.svg'],
['lab-consumables','Lab Consumables & Plasticware','🧫','Blood collection, sample containers, plasticware and glassware for everyday lab work.','cat-consumables.svg'],
['hospital-consumables','Hospital Consumables','🧤','Gloves, cotton, dressings, catheters, IV products and protective supplies.','cat-hospital-consumables.svg']];
const X={
'lab-equipment':'Binocular Compound Microscope;Trinocular Microscope (camera port);Table-Top Centrifuge;Refrigerated Centrifuge;Laboratory Incubator;Hot Air Oven;Vertical Autoclave;Horizontal Autoclave;Water Bath;Analytical Balance;pH Meter;Colorimeter / Spectrophotometer;Vortex Mixer;Magnetic Stirrer with Hot Plate;Laminar Air Flow Cabinet;Biosafety Cabinet;Laboratory Refrigerator;Deep Freezer (-20 °C / -40 °C);Micropipettes (Single / Multichannel);Rotator / Shaker',
'analyzers':'5-Part Hematology Analyzer;3-Part Hematology Analyzer (Cell Counter);Semi-Auto Biochemistry Analyzer;Fully Auto Biochemistry Analyzer;Electrolyte Analyzer (Na / K / Cl);Coagulation Analyzer (PT / aPTT);ELISA Reader;ELISA Plate Washer;Urine Analyzer (Strip Reader);ESR Analyzer;Blood Gas Analyzer;HbA1c Analyzer;Immunoassay Analyzer (CLIA / FIA);Hemoglobin Meter;Glucometer;Real-Time PCR System;Cardiac Marker Reader (Point of Care)',
'hospital-equipment':'Multipara Patient Monitor;ECG Machine (3 / 6 / 12 Channel);Infusion Pump;Syringe Pump;Defibrillator;Ventilator;Oxygen Concentrator;Pulse Oximeter;Nebulizer;Suction Machine;Digital BP Monitor;Fetal Doppler;Digital / Infrared Thermometer;Weighing Scale;OT Light;Operating Table;Hospital Bed (Manual / Electric);Stretcher & Wheelchair;Examination Couch;Instrument Trolley;Phototherapy Unit;Infant Warmer',
'reagents':'Glucose Reagent (GOD-POD);Urea / BUN Reagent;Creatinine Reagent;Uric Acid Reagent;Bilirubin (Total / Direct) Reagent;SGOT (AST) / SGPT (ALT) Reagent;Alkaline Phosphatase Reagent;Cholesterol / HDL / Triglycerides Reagent;Total Protein / Albumin Reagent;Calcium Reagent;HbA1c Kit;CRP Latex / Quantitative Kit;RA Factor / ASO Latex Kit;Widal Antigen Set;VDRL / RPR Antigen;Blood Grouping Antisera (A, B, D);Coombs Reagent;Hematology Diluent / Lyse / Cleaner;Giemsa / Leishman Stain;Gram Stain Kit;Field\'s Stain;ZN Stain (AFB);Culture Media (Nutrient / MacConkey / Blood Agar);Biochemistry Calibrators & Controls;Coagulation Reagents (PT / aPTT);ELISA Kits',
'test-kits':'Dengue NS1 / IgG / IgM Rapid Test;Pregnancy (HCG) Rapid Card;H. Pylori Rapid Test;CRP Rapid Test;Chikungunya Rapid Test;Blood Group Rapid Card',
'lab-consumables':'Pipette Tips (10 / 200 / 1000 µl);Micro Centrifuge Tubes (1.5 / 2 ml);Centrifuge Tubes (15 / 50 ml);Cryovials;Cover Slips;Test Tube Racks;Slide Storage Boxes;Staining Jars;Wash Bottles;Measuring Cylinders & Beakers;Reagent Bottles;Droppers;Culture Tubes',
'hospital-consumables':'IV Cannula;IV Infusion Set;Foley Catheter;Urine Collection Bag;Surgical Face Mask;N95 Respirator;Disposable Gown / PPE Kit;Surgical Gloves (Sterile);Cotton Gauze & Swabs;Crepe Bandage;Surgical Blades;Disposable Cap & Shoe Cover;Micropore Tape;Oxygen Mask;Nebulizer Mask;ECG Electrodes'};
const FROM={'test-kits':['test'],'lab-consumables':['lab','blood'],'hospital-consumables':['care']};
const cnav=a=>CATS2.map(c=>'<a class="tab'+(c[0]===a?' on':'')+'" href="#/c/'+c[0]+'">'+c[2]+' '+c[1]+'</a>').join('');
const CATIMG={'Laboratory Equipment':'cat-equipment','Analyzers & Machines':'cat-diagnostic','Hospital Equipment':'cat-hospital','Reagents & Chemicals':'cat-reagents','Diagnostic Test Kits':'cat-test-kits','Lab Consumables & Plasticware':'cat-consumables','Hospital Consumables':'cat-hospital-consumables'};
const ccard=(t,d,k,e,l)=>{const src=k?IMG[k]:IMG[CATIMG[l]];return `<div class="pc" data-k="${k||''}" data-t="${t.toLowerCase()}"><div class="im ${CT.includes(k)?'ct':''}"><img loading="lazy" alt="${t}" src="${src}" onerror="this.style.display='none'"></div><div class="bd"><small>${l}</small><h3>${t}</h3><p>${d}</p><div class="qr"><button class="qb" data-d="-1" aria-label="Decrease">−</button><input class="qi" type="number" min="1" max="99999" value="1" aria-label="Quantity"><button class="qb" data-d="1" aria-label="Increase">+</button></div><button class="btn ad" data-t="${t}">📋 Add to Quote</button></div></div>`};
function showCat(sl){const C=CATS2.find(x=>x[0]===sl)||CATS2[0];
const it=(FROM[C[0]]?PR.filter(p=>FROM[C[0]].includes(p[1])).map(p=>ccard(p[0],p[2],p[3],C[2],C[1])):[]).concat(X[C[0]].split(';').map(n=>ccard(n,DEF,null,C[2],C[1])));
const bg=C[4]?'url(images/'+C[4]+') center/cover':'linear-gradient(135deg,#0891b2,#2563eb,#7c3aed)';
document.getElementById('cpc').innerHTML=`<div class="cban" style="background:linear-gradient(90deg,rgba(5,15,50,.85),rgba(5,15,50,.2)),${bg}"><div><h2>${C[2]} ${C[1]}</h2><p>${C[3]}</p><span class="cn">${it.length} products</span></div></div><div class="tabs">${cnav(C[0])}<a class="tab" href="#/products">All Products</a></div><div class="pbar"><input id="cq" placeholder="🔍 Search in ${C[1]}..."></div><div class="pg" id="cpg">${it.join('')}</div><p class="more">Can't find your brand or model? <a class="btn" href="#contact">Request Custom Sourcing</a></p>`;
const g=document.getElementById('cpg');
document.getElementById('cq').oninput=e=>{const q=e.target.value.toLowerCase();g.querySelectorAll('.pc').forEach(x=>x.classList.toggle('hide',!x.dataset.t.includes(q)))};
g.addEventListener('click',e=>{if(e.target.tagName==='IMG'){lb.querySelector('img').src=e.target.src;lb.classList.add('on')}});
document.title=C[1]+' | Edge Biogene'}
document.getElementById('pcn').innerHTML=cnav('');
const TT={home:'Edge Biogene | Laboratory & Medical Supplies Wholesale, Dehradun',about:'About Us | Edge Biogene',sourcing:'Brands & Sourcing | Edge Biogene',bulk:'Bulk & Custom Orders | Edge Biogene',industries:'Industries We Serve | Edge Biogene',contact:'Contact & Request a Quote | Edge Biogene',products:'All Products | Edge Biogene'};
function route(){const h=location.hash,c=h.indexOf('#/c/')===0,pp=h==='#/products',R=document.documentElement.classList;R.toggle('pgmode',pp);R.toggle('cpmode',c);
let k=c?'cat':pp?'products':h.replace('#','');if(!TT[k]&&k!=='cat')k='home';
document.querySelectorAll('section[data-p]').forEach(x=>{x.hidden=x.dataset.p.split(' ').indexOf(k)<0});
document.querySelectorAll('nav ul a').forEach(a=>{const t=a.getAttribute('href');a.classList.toggle('on',t==='#'+k||(t==='#/products'&&(pp||c)))});
if(c)showCat(h.slice(4));else document.title=TT[k];
document.body.classList.remove('pt');void document.body.offsetWidth;document.body.classList.add('pt');scrollTo({top:0,behavior:'instant'})}
addEventListener('hashchange',route);route();


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
