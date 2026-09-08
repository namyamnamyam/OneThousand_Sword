const groups = [
  {
    title:'교직원', sub:'FACULTY',
    chars:[
      {name:'셀레스티아 리멘',grade:'SS GRADE',role:'학장 · 차원검사',sub:'차원을 가르는 만검 아카데미의 상징',personality:'사교적이고 밝지만 필요할 때는 누구보다 진지하다.',style:'차원검술',desc:'차원문과 공간참을 자유롭게 다루며 수많은 세계의 검을 직접 경험한 전설적인 검사.',img:'assets/celestia.jpg',accent:'gold'},
      {name:'엘리네 세르벨',grade:'S GRADE',role:'교수 · 정통 기사검술',sub:'기본기를 극한까지 완성한 기사 교수',personality:'엄격하고 원칙적이지만 학생들을 깊이 아낀다.',style:'정통 기사검술 · 오러',desc:'오러 블레이드와 오러 아머를 기반으로 가장 정석적인 검술을 가장 높은 수준으로 구현한다.',img:'assets/eline.jpg',accent:'green'},
      {name:'카엔 레비에르',grade:'S GRADE',role:'교수 · 이도류',sub:'실전을 아는 유쾌한 이도류 교관',personality:'친근하고 유쾌하지만 전투에 들어가면 빠르고 냉정하다.',style:'혈아 · 청추 이도류',desc:'혈아로 방어와 무기를 찢어 열고 청추로 빈틈을 정확히 꿰뚫는 실전파 검사.',img:'assets/kaen.jpg',accent:'red'}
    ]
  },
  {
    title:'2학년', sub:'ADVANCED',
    chars:[
      {name:'진하령',grade:'A GRADE',role:'2학년 · 소천마',sub:'언젠가 반드시 넘어야 할 벽',personality:'강자를 존중하고 약함을 경멸하는 패도적인 성격.',style:'천마계 검술',desc:'상대가 자신의 흐름에 맞춰 움직이도록 강제로 전장을 장악하는 압도형 검사.',img:'assets/jinharyeong.jpg',accent:'purple'},
      {name:'리에나 발테르',grade:'A GRADE',role:'2학년 · 마검 사용자',sub:'마검 바알과 처음부터 하나인 선배',personality:'차가워 보이지만 실제로는 다정하고 허당기가 있다.',style:'일체형 마검 · 바알',desc:'사용자와 마검이 함께 강화되며 흡수, 변형, 광역 참격을 사용하는 일체형 마검 사용자.',img:'assets/riena.jpg',accent:'red'}
    ]
  },
  {
    title:'1학년', sub:'ASPIRANTS',
    chars:[
      {name:'매화린',grade:'B GRADE',role:'1학년 · 화산파',sub:'흐름으로 검을 완성하는 정통 무협 검사',personality:'밝고 올곧으며 책임감이 강하고 예의를 중시한다.',style:'이십사수매화검법',desc:'유려하고 정교한 연속 공방으로 검의 흐름을 끊지 않는 화산파 검사.',img:'assets/maehwarin.jpg',accent:'green'},
      {name:'카렌 발카르',grade:'B GRADE',role:'1학년 · 마검사',sub:'화력과 파괴력으로 정면을 뚫는다',personality:'직선적이고 호쾌하며 강한 상대를 만나면 오히려 즐거워한다.',style:'대검 · 화염 폭발 마검술',desc:'대검의 질량과 화염 마법을 결합해 정면에서 방어를 부숴버리는 화력형 검사.',img:'assets/karen.jpg',accent:'red'},
      {name:'스즈키 레이',grade:'B GRADE',role:'1학년 · 발도술',sub:'최소 동작으로 승부를 끝낸다',personality:'과묵하고 냉정하며 불필요한 말과 움직임을 싫어한다.',style:'발도 중심 일본계 검술',desc:'상대가 행동을 완성하기 전에 정확한 한 번의 검격으로 승부를 결정하는 속도형 검사.',img:'assets/rei.jpg',accent:'gold'},
      {name:'시엘 라벤',grade:'B GRADE',role:'1학년 · 사복검',sub:'상대의 공간부터 빼앗는 변칙 검사',personality:'평소에는 장난스럽지만 전투에서는 냉정하고 계산적이다.',style:'사복검 · 공간 제어',desc:'직검과 분절 사복검을 전환하며 궤도를 바꾸고 상대의 이동 공간을 봉쇄한다.',img:'assets/ciel.jpg',accent:'blue'},
      {name:'셀렌 아스트라',grade:'B GRADE',role:'1학년 · 광선검',sub:'검의 길이는 정해져 있지 않다',personality:'실용적이고 침착하며 허세보다 생존과 효율을 우선한다.',style:'가변 광선검 · 거리 변화',desc:'검신의 길이와 출력을 바꾸고 원거리 광참까지 활용하는 우주 전쟁 출신 실전 검사.',img:'assets/selen.jpg',accent:'purple'}
    ]
  }
];

const groupRoot=document.querySelector('#character-groups');

groups.forEach(group=>{
  const section=document.createElement('section');section.className='group';
  section.innerHTML=`<div class="group-title"><strong>${group.title}</strong><span>${group.sub}</span></div><div class="character-grid"></div>`;
  const grid=section.querySelector('.character-grid');
  group.chars.forEach(c=>{
    const card=document.createElement('article');card.className='character-card';card.dataset.accent=c.accent||'blue';
    card.innerHTML=`<div class="character-image"><img src="${c.img}" alt="${c.name}" loading="lazy"><div class="card-overlay"><span class="grade-badge">${c.grade}</span><h3>${c.name}</h3></div></div><div class="card-meta"><strong>${c.role}</strong><span>→</span></div>`;
    card.addEventListener('click',()=>openModal(c));grid.appendChild(card);
  });
  groupRoot.appendChild(section);
});

const modal=document.querySelector('#character-modal');
function openModal(c){
  document.querySelector('#modal-image').src=c.img;
  document.querySelector('#modal-grade').textContent=c.grade;
  document.querySelector('#modal-role').textContent=c.role;
  document.querySelector('#modal-name').textContent=c.name;
  document.querySelector('#modal-sub').textContent=c.sub;
  document.querySelector('#modal-personality').textContent=c.personality;
  document.querySelector('#modal-style').textContent=c.style;
  document.querySelector('#modal-desc').textContent=c.desc;
  modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';
}
function closeModal(){modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow=''}
document.querySelectorAll('[data-close-modal]').forEach(el=>el.addEventListener('click',closeModal));
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal()});

const navLinks=[...document.querySelectorAll('.nav-link')];
const sections=navLinks.map(a=>document.querySelector(a.getAttribute('href')));
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){navLinks.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+entry.target.id))}}),{rootMargin:'-35% 0px -55%'});
sections.forEach(s=>observer.observe(s));
