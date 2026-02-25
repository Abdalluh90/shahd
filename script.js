let current = 0;
const pages = document.querySelectorAll(".page");

function next(){

pages[current].classList.remove("active");
current++;

pages[current].classList.add("active");

if(current === pages.length-1){
startConfetti();
document.getElementById("music").play();
}
}


/* 🎉 Confetti Effect */

function startConfetti(){

const canvas=document.getElementById("confetti");
const ctx=canvas.getContext("2d");

canvas.width=window.innerWidth;
canvas.height=window.innerHeight;

let pieces=[];

for(let i=0;i<120;i++){
pieces.push({
x:Math.random()*canvas.width,
y:Math.random()*canvas.height,
r:Math.random()*6+2
});
}

function draw(){

ctx.clearRect(0,0,canvas.width,canvas.height);

ctx.fillStyle="pink";

pieces.forEach(p=>{
ctx.beginPath();
ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
ctx.fill();

p.y+=2;

if(p.y>canvas.height){
p.y=0;
}
});

requestAnimationFrame(draw);
}

draw();
}