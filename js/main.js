/* ============ RENDER ============ */
const $ = s => document.querySelector(s), C = CONFIG;
const esc = value => String(value ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#039;"}[c]));
const wa = (text, kind = "appointment") => { const base = kind === "products" ? C.whatsappProducts : C.whatsapp; return base + "?text=" + encodeURIComponent(text); };
const PAL = [["#5A3324","#DDB491"],["#A35A35","#F7EEE5"],["#33190F","#C99A6B"],["#EBD3BD","#5A3324"],["#DDB491","#33190F"]];
function art(i){let s=i*7919+13;const r=()=> (s=s*16807%2147483647)/2147483647,[bg,fg]=PAL[i%PAL.length];let p="";for(let k=0;k<26;k++){const x=r()*110-5,a=2+r()*5,f=.25+r()*.35,ph=r()*6;let d="";for(let y=-4;y<=104;y+=1){const X=x+a*Math.sin(y*f+ph)+a*.4*Math.sin(y*f*2.3);d+=(y<0?"M":"L")+X.toFixed(1)+" "+y}p+=`<path d="${d}" opacity="${.35+r()*.6}"/>`}return`<svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice" aria-hidden="true" style="background:${bg}"><g fill="none" stroke="${fg}" stroke-width="1.1" stroke-linecap="round">${p}</g></svg>`}
function fig(o,i,cls=""){const h=o?.src?`<img src="${esc(o.src)}" alt="${esc(o.alt)}" loading="lazy" decoding="async">`:`<div role="img" aria-label="${esc(o?.alt || "Imagem demonstrativa")}">${art(i)}</div><figcaption>Imagem de ambiente provisória</figcaption>`;return`<figure class="ph ${cls}">${h}</figure>`}
function put(sel,html){const e=$(sel);e.outerHTML=html.replace("<figure",`<figure id="${sel.slice(1)}"`)}
const LOGO_VB="-1 5 94 104",LOGO_D="M13.1 87.7C15.0 89.5 20.3 95.7 24.5 98.5C28.7 101.3 33.7 103.3 38.5 104.3C43.4 105.2 48.6 105.2 53.5 104.3C58.3 103.3 63.3 101.3 67.5 98.5C71.7 95.7 75.8 91.9 78.9 87.7C82.1 83.4 84.7 78.3 86.4 73.1C88.1 67.9 89.2 61.7 89.0 56.5C88.8 51.3 87.0 45.8 85.0 42.0C83.0 38.2 80.0 35.8 77.0 34.0C74.0 32.2 70.5 30.8 67.0 31.0C63.5 31.2 59.0 33.0 56.0 35.0C53.0 37.0 50.5 40.3 49.0 43.0C47.5 45.7 46.7 48.2 47.0 51.0C47.3 53.8 49.2 57.8 51.0 60.0C52.8 62.2 55.8 64.0 58.0 64.0C60.2 64.0 62.8 61.7 64.0 60.0C65.2 58.3 65.5 55.8 65.0 54.0C64.5 52.2 62.3 50.0 61.0 49.5C59.7 49.0 57.8 50.2 57.0 51.0C56.2 51.8 56.2 53.5 56.0 54.0M78.9 25.3C77.0 23.5 71.7 17.3 67.5 14.5C63.3 11.7 58.3 9.7 53.5 8.7C48.6 7.8 43.4 7.8 38.5 8.7C33.7 9.7 28.7 11.7 24.5 14.5C20.3 17.3 16.2 21.1 13.1 25.3C9.9 29.6 7.3 34.7 5.6 39.9C3.9 45.1 2.8 51.3 3.0 56.5C3.2 61.7 5.0 67.2 7.0 71.0C9.0 74.8 12.0 77.2 15.0 79.0C18.0 80.8 21.5 82.2 25.0 82.0C28.5 81.8 33.0 80.0 36.0 78.0C39.0 76.0 41.5 72.7 43.0 70.0C44.5 67.3 45.3 64.8 45.0 62.0C44.7 59.2 42.8 55.2 41.0 53.0C39.2 50.8 36.2 49.0 34.0 49.0C31.8 49.0 29.2 51.3 28.0 53.0C26.8 54.7 26.5 57.2 27.0 59.0C27.5 60.8 29.7 63.0 31.0 63.5C32.3 64.0 34.2 62.8 35.0 62.0C35.8 61.2 35.8 59.5 36.0 59.0";
const mark=c=>`<svg class="lg ${c}" viewBox="${LOGO_VB}" aria-hidden="true" focusable="false"><path d="${LOGO_D}"/></svg>`;
$("#logo").innerHTML=mark("")+esc(C.name);
const markTarget = $(".about .eyebrow"); if(markTarget) markTarget.insertAdjacentHTML("beforebegin",mark("mark"));
$(".about")?.insertAdjacentHTML("afterbegin",mark("wm wm-about"));$(".cta")?.insertAdjacentHTML("afterbegin",mark("wm wm-cta"));
put("#hero-main",fig(C.img.hero,0,"main arch"));
put("#hero-small",fig(C.img.hero2,1,"small"));
$("#serv-img").innerHTML=fig(C.img.serv,2,"arch");
$("#about-body").innerHTML=C.about.map(t=>`<p>${esc(t)}</p>`).join("");
$("#about-big").textContent=C.aboutBig;
const curl=([n,b,g])=>{const T=n*2*Math.PI,bs=g?0:b,p=(184+b-bs)/T,N=n*40;let d="";for(let i=0;i<=N;i++){const t=T*i/N,bb=g?b*Math.pow(t/T,1.3):b,x=8+bs+p*t-bb*Math.cos(t),y=27+bb*Math.sin(t);d+=(i?"L":"M")+x.toFixed(1)+" "+y.toFixed(1)}return`<svg viewBox="0 0 200 54" aria-hidden="true"><path d="${d}"/></svg>`};
$("#tex-list").innerHTML=C.textures.map(t=>`<li class="rv"><h3>${esc(t.name)}</h3>${curl(t.shape)}<p>${esc(t.description)}</p></li>`).join("");
$("#serv-list").innerHTML=C.services.map(s=>`<details class="srow rv"><summary>${esc(s.name)}</summary><div class="in"><p>${esc(s.description)}</p><span class="meta">${esc(s.meta)}</span><a class="tlink" href="${wa("Olá! Quero saber mais sobre: "+s.name)}" target="_blank" rel="noopener">Perguntar sobre este serviço →</a></div></details>`).join("");
$("#gal").innerHTML=C.img.gal.map((o,i)=>fig(o,i+2,[0,2].includes(i)?"arch":"").replace("ph ","ph rv ")).join("");
$("#before-after-grid").innerHTML=C.img.beforeAfter.map((pair,i)=>`<article class="ba-card rv"><div class="ba-pair"><figure class="ph"><img src="${esc(pair.before.src)}" alt="${esc(pair.before.alt)}" loading="lazy" decoding="async"><span>Antes</span></figure><figure class="ph"><img src="${esc(pair.after.src)}" alt="${esc(pair.after.alt)}" loading="lazy" decoding="async"><span>Depois</span></figure></div><p>Transformação ${i+1}</p></article>`).join("");
$("#flow").innerHTML=C.steps.map((s,i)=>`<li class="rv"><span class="n">${i+1}</span><div><h3>${esc(s.title)}</h3><p>${esc(s.text)}</p></div></li>`).join("");
$("#team").innerHTML=C.team.map((p,i)=>`<article>${fig(C.img.team[i],i+4,"arch")}<b>${esc(p.name)}</b><small>${esc(p.specialty)}</small><p>${esc(p.bio)}</p></article>`).join("");
$("#testimonials").innerHTML=C.testimonials.map(t=>`<article class="quote rv"><div class="quote-mark" aria-hidden="true">“</div><p>${esc(t.text)}</p><div class="who"><strong>${esc(t.name)}</strong></div></article>`).join("");
$("#faq").innerHTML=C.faq.map(f=>`<details><summary>${esc(f[0])}</summary><p>${esc(f[1])}</p></details>`).join("");
$("#addr").innerHTML=`<a class="address-link" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(C.address)}" target="_blank" rel="noopener">${esc(C.address)}</a><div class="hours"><strong>Horário de funcionamento</strong>${C.hours.map(h => `<div><span>${esc(h.day)}</span><span class="${h.time === "Fechado" ? "closed" : ""}">${esc(h.time)}</span></div>`).join("")}</div>`;
$("#foot").textContent=`© ${new Date().getFullYear()} ${C.name} · ${C.address}`;
$("#foot").insertAdjacentHTML("afterbegin",mark("foot-mark"));
$("#ig").href=C.instagram;
document.querySelectorAll("[data-wa]").forEach(a=>{a.href=wa(a.dataset.wa, "appointment");a.target="_blank";a.rel="noopener"});
document.querySelectorAll("[data-wa-products]").forEach(a=>{a.href=wa(a.dataset.waProducts, "products");a.target="_blank";a.rel="noopener"});
/* menu */
/* menu */
const menuBtn=$(".menu-toggle"), nav=$("#site-nav");
const setMenu=open=>{
  menuBtn.setAttribute("aria-expanded",String(open));
  menuBtn.setAttribute("aria-label",open?"Fechar menu":"Abrir menu");
  nav.classList.toggle("open",open);
  const s=menuBtn.querySelector("span"); if(s) s.textContent=open?"×":"+";
};
menuBtn?.addEventListener("click",e=>{e.stopPropagation();setMenu(menuBtn.getAttribute("aria-expanded")!=="true")});
nav?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>setMenu(false)));
document.addEventListener("click",e=>{if(nav.classList.contains("open")&&!nav.contains(e.target)&&!menuBtn.contains(e.target))setMenu(false)});
document.addEventListener("keydown",e=>{if(e.key==="Escape")setMenu(false)});
addEventListener("resize",()=>{if(innerWidth>760)setMenu(false)});
/* rolls */
const reduce=matchMedia("(prefers-reduced-motion:reduce)").matches;
document.querySelectorAll(".arrows").forEach(g=>{const t=$("#"+g.firstElementChild.dataset.roll),[a,b]=g.children;const up=()=>{const m=t.scrollWidth-t.clientWidth;g.style.display=m>4?"flex":"none";a.disabled=t.scrollLeft<4;b.disabled=t.scrollLeft>m-4};g.addEventListener("click",e=>{const x=e.target.closest("button");if(x)t.scrollBy({left:Number(x.dataset.d)*t.clientWidth*.8,behavior:reduce?"auto":"smooth"})});t.addEventListener("scroll",up,{passive:true});addEventListener("resize",up);up()});
/* reveal */
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll(".rv").forEach(e=>io.observe(e));
