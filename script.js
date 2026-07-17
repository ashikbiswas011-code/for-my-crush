// =========================
// QUESTIONS (Edit Only This)
// =========================

const questions = [

"Hey... ❤️",

"Tmr kache ekta proshno chilo...🥺",

"Tmi ki amar sathe protidin kotha bolbe? 😊",

"Tmr ki mone hoy amader golpota ekhan theke suru howa uchit? 💕",

"Tmi ki amar sathe onek shundor memory create korbe? 🌸",

"Last Question...🥹<br><br>Amar Hobe? ❤️"

];

// =========================

const title = document.getElementById("title");
const message = document.getElementById("message");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

const progress = document.getElementById("progressBar");

let page = 0;

// Hide buttons at first
yesBtn.style.display = "none";
noBtn.style.display = "none";


// =========================
// TYPEWRITER
// =========================

function typeWriter(text, speed = 45) {

message.innerHTML = "";

let i = 0;

function typing() {

if (i < text.length) {

if (text.substring(i, i + 4) === "<br>") {

message.innerHTML += "<br>";

i += 4;

} else {

message.innerHTML += text.charAt(i);

i++;

}

setTimeout(typing, speed);

}

else{

if(page==0){

setTimeout(nextIntro,1200);

}else{

yesBtn.style.display="inline-block";
noBtn.style.display="inline-block";

}

}

}

typing();

}

typeWriter(questions[0]);


// =========================
// INTRO PAGES
// =========================

function nextIntro(){

page++;

message.style.opacity=0;

setTimeout(()=>{

message.style.opacity=1;

typeWriter(questions[page]);

},500);

}


// =========================
// YES BUTTON
// =========================

yesBtn.onclick=function(){

page++;

if(page<questions.length){

message.style.opacity=0;

setTimeout(()=>{

message.style.opacity=1;

typeWriter(questions[page]);

},500);

progress.style.width=((page)/(questions.length-1))*100+"%";

}else{

// Final Animation Part 3C

finishLove();

}

}


// =========================
// NO BUTTON RUN
// =========================

function moveNo(){

let x=Math.random()*(window.innerWidth-180);

let y=Math.random()*(window.innerHeight-120);

noBtn.style.position="fixed";

noBtn.style.left=x+"px";

noBtn.style.top=y+"px";

}

noBtn.addEventListener("mouseenter",moveNo);

noBtn.addEventListener("touchstart",moveNo);


// =========================
// Small Button Animation
// =========================

setInterval(()=>{

yesBtn.style.transform="scale(1.08)";

setTimeout(()=>{

yesBtn.style.transform="scale(1)";

},300);

},1200);


// =========================
// Placeholder
// =========================

function finishLove(){

// Part 3C e ashbe ❤️

}
// ==============================
// FLOATING HEARTS
// ==============================

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML=["❤️","💖","💕","💗"][Math.floor(Math.random()*4)];

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(15+Math.random()*35)+"px";

heart.style.animationDuration=(4+Math.random()*4)+"s";

document.querySelector(".hearts").appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

}

setInterval(createHeart,350);


// ==============================
// TWINKLING STARS
// ==============================

for(let i=0;i<80;i++){

const star=document.createElement("div");

star.className="star";

star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";

star.style.width=(2+Math.random()*3)+"px";

star.style.height=star.style.width;

star.style.animationDelay=Math.random()*2+"s";

document.body.appendChild(star);

}


// ==============================
// FALLING PETALS
// ==============================

function createPetal(){

const petal=document.createElement("div");

petal.innerHTML="🌸";

petal.style.position="fixed";

petal.style.left=Math.random()*100+"vw";

petal.style.top="-40px";

petal.style.fontSize=(18+Math.random()*18)+"px";

petal.style.pointerEvents="none";

petal.style.transition="transform 8s linear";

document.body.appendChild(petal);

setTimeout(()=>{

petal.style.transform=

`translate(${Math.random()*250-125}px,110vh)
rotate(${Math.random()*720}deg)`;

petal.style.opacity="0";

},100);

setTimeout(()=>{

petal.remove();

},8200);

}


// ==============================
// PAGE ANIMATIONS
// ==============================

function pageAnimation(){

switch(page){

case 1:

document.body.style.background=
"linear-gradient(135deg,#ff5f9e,#ff9966)";

break;

case 2:

document.body.style.background=
"linear-gradient(135deg,#7f7fd5,#86a8e7,#91eae4)";

createPetal();

break;

case 3:

document.body.style.background=
"linear-gradient(135deg,#1e3c72,#2a5298)";

for(let i=0;i<20;i++){

setTimeout(createPetal,i*120);

}

break;

case 4:

document.body.style.background=
"linear-gradient(135deg,#ff0844,#ffb199)";

for(let i=0;i<40;i++){

setTimeout(createHeart,i*60);

}

break;

}

}


// ==============================
// UPDATE PAGE EFFECT
// ==============================

const oldNextIntro = nextIntro;

nextIntro = function(){

oldNextIntro();

setTimeout(pageAnimation,600);

}


const oldYes = yesBtn.onclick;

yesBtn.onclick = function(){

oldYes();

setTimeout(pageAnimation,600);

}


// ==============================
// GLASS CARD GLOW
// ==============================

setInterval(()=>{

const card=document.querySelector(".glass");

card.style.boxShadow=
"0 0 "+(30+Math.random()*25)+"px rgba(255,255,255,.35)";

},1200);
// ==========================================
// FINAL LOVE ENDING
// ==========================================

function finishLove(){

    yesBtn.style.display="none";
    noBtn.style.display="none";

    title.innerHTML="❤️ YAYYYY ❤️";

    message.innerHTML=`
    <h2 style="line-height:55px;">
        Tumi YES bole diyecho! 🥹💖<br><br>
        Aaj theke amar sobcheye shundor golpo ta shuru holo. 🌸<br><br>
        I Promise...<br>
        Tomake sobsomoy care korbo. ❤️
    </h2>
    `;

    progress.style.width="100%";

    startHeartExplosion();

    startConfetti();

    playMusic();

}


// ==========================================
// HEART EXPLOSION
// ==========================================

function startHeartExplosion(){

    for(let i=0;i<250;i++){

        setTimeout(()=>{

            const heart=document.createElement("div");

            heart.innerHTML=["❤️","💖","💕","💗","💘"][Math.floor(Math.random()*5)];

            heart.style.position="fixed";

            heart.style.left=window.innerWidth/2+"px";

            heart.style.top=window.innerHeight/2+"px";

            heart.style.fontSize=(20+Math.random()*35)+"px";

            heart.style.pointerEvents="none";

            heart.style.transition="all 2s ease-out";

            document.body.appendChild(heart);

            const x=(Math.random()-0.5)*900;

            const y=(Math.random()-0.5)*900;

            setTimeout(()=>{

                heart.style.transform=`translate(${x}px,${y}px) rotate(${Math.random()*720}deg)`;

                heart.style.opacity="0";

            },50);

            setTimeout(()=>{

                heart.remove();

            },2200);

        },i*20);

    }

}


// ==========================================
// CONFETTI
// ==========================================

function startConfetti(){

    for(let i=0;i<300;i++){

        setTimeout(()=>{

            const conf=document.createElement("div");

            conf.className="confetti";

            conf.style.left=Math.random()*100+"vw";

            conf.style.background=

            ["#ff2e63","#FFD93D","#6BCB77","#4D96FF","#ffffff"]

            [Math.floor(Math.random()*5)];

            conf.style.width=(6+Math.random()*10)+"px";

            conf.style.height=conf.style.width;

            document.body.appendChild(conf);

            setTimeout(()=>{

                conf.remove();

            },5000);

        },i*15);

    }

}


// ==========================================
// MUSIC
// ==========================================

function playMusic(){

    const music=document.getElementById("bgMusic");

    if(music){

        music.play().catch(()=>{});

    }

}


// ==========================================
// CONTINUOUS HEART RAIN
// ==========================================

setInterval(()=>{

    if(progress.style.width=="100%"){

        createHeart();

    }

},120);


// ==========================================
// TITLE GLOW
// ==========================================

setInterval(()=>{

    if(progress.style.width=="100%"){

        title.style.textShadow=

        `0 0 ${20+Math.random()*40}px white`;

    }

},400);