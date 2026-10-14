// Expansion: visual campus, timed events, and mutations. All bonuses are fictional.
const MUTATIONS=[{name:'Normal',mult:1,weight:65},{name:'Golden',mult:2,weight:20},{name:'Diamond',mult:4,weight:10},{name:'Rainbow',mult:10,weight:5}];
const EVENTS=[{name:'Flyer Frenzy',description:'Double income for 45 seconds',duration:45},{name:'Golden Hour',description:'Golden mutation chance increased',duration:45},{name:'Secret Assembly',description:'Secret-tier spawn odds boosted',duration:45}];
let currentEvent=null,eventEnd=0;
function mutationRoll(){let roll=Math.random()*100;for(const m of MUTATIONS){roll-=m.weight;if(roll<0)return m;}return MUTATIONS[0]}
function effectiveIncome(){return data.base.reduce((sum,id)=>sum+byId(id).income,0)*(1+data.rebirths*.2)*(currentEvent?.name==='Flyer Frenzy'?2:1)}
function setupExpansion(){
const style=document.createElement('style');style.textContent=`
.campus{background:radial-gradient(ellipse at top,#274f87,#0b1328 75%);padding:24px 12px;border-radius:16px;overflow:hidden;margin:18px 0;text-align:center}
.campus-stage{position:relative;max-width:700px;height:290px;margin:auto;perspective:700px}
.campus-ground{position:absolute;inset:40px 60px 12px;background:repeating-linear-gradient(90deg,#346e57 0 45px,#3e8062 46px 47px);transform:rotateX(55deg);border:8px solid #e9ce75;border-radius:12px;box-shadow:0 30px 45px #0008}
.campus-building{position:absolute;left:27%;right:27%;top:5px;height:135px;background:linear-gradient(110deg,#d4bc8e,#a88962);border:7px solid #e6d5a9;border-bottom:20px solid #786149;box-shadow:12px 18px 0 #0005;transform:skewY(-4deg)}
.campus-building:before{content:'CHAMI CAMPUS';display:block;background:#1b3763;color:#f7d674;padding:7px;font-weight:900;letter-spacing:2px}
.campus-building:after{content:'▣  ▣  ▣  ▣';display:block;color:#344a6a;font-size:35px;margin-top:9px}
.campus-avatar{position:absolute;bottom:36px;left:47%;font-size:54px;filter:drop-shadow(5px 8px 3px #0009);animation:bob 1.5s ease-in-out infinite alternate}
@keyframes bob{to{transform:translateY(-12px)}}
.eventbar{padding:12px;background:#26385d;border:1px solid #f4c858;border-radius:10px;margin:12px 0}
`;document.head.appendChild(style);
const campus=document.createElement('section');campus.className='campus';campus.innerHTML='<h2>🏫 Chami Campus · 3D-style Preview</h2><p>Explore the school-themed world as a Flyer</p><div class="campus-stage"><div class="campus-ground"></div><div class="campus-building"></div><div class="campus-avatar">🧍</div></div><div id="eventStatus" class="eventbar">Next campus event loading…</div><button id="eventTrigger">🎲 Start a random campus event</button>';
const target=document.querySelector('.wrap')||document.body;target.prepend(campus);
const status=campus.querySelector('#eventStatus');campus.querySelector('#eventTrigger').onclick=()=>{const e=EVENTS[Math.floor(Math.random()*EVENTS.length)];currentEvent=e;eventEnd=Date.now()+e.duration*1000;status.textContent=`⚡ ${e.name}: ${e.description} (${e.duration}s)`;};
setInterval(()=>{if(currentEvent&&Date.now()>eventEnd){currentEvent=null;status.textContent='⏳ No active event — start one!';}else if(currentEvent)status.textContent=`⚡ ${currentEvent.name} — ${Math.ceil((eventEnd-Date.now())/1000)}s remaining`;},1000);
}
window.addEventListener('DOMContentLoaded',setupExpansion);
