let locked = false;

function sleep(ms){
return new Promise(r => setTimeout(r, ms));
}

/* NAVIGATION */
document.addEventListener("click", async (e)=>{

if(locked) return;

/* LOGIN */
if(e.target.id === "enterBtn"){

const email = document.getElementById("email").value;
const pass = document.getElementById("password").value;

if(!email || !pass){
alert("Fill both fields");
return;
}

locked = true;

/* CONSTELLATION START */
const stars = document.querySelectorAll(".star");

const positions = [
{x:20,y:20},
{x:40,y:15},
{x:60,y:25},
{x:30,y:55},
{x:65,y:60},
{x:50,y:80}
];

stars.forEach((s,i)=>{
s.style.left = positions[i].x + "%";
s.style.top = positions[i].y + "%";
s.style.opacity = 1;
});

await sleep(700);

/* BREAK EFFECT */
stars.forEach(s=>{
s.animate([
{transform:"scale(1)"},
{transform:"scale(0) translate(-40vw,-40vh)"}
],{duration:900,fill:"forwards"});
});

await sleep(1000);

window.location.href = "home.html";
}

/* SIGNUP NAV */
if(e.target.id === "goSignup"){
window.location.href = "signup.html";
}

if(e.target.id === "goLogin"){
window.location.href = "index.html";
}

/* SIGNUP SUBMIT */
if(e.target.id === "signupBtn"){

const n = document.getElementById("suName").value;
const e1 = document.getElementById("suEmail").value;
const p = document.getElementById("suPass").value;

if(!n || !e1 || !p){
alert("Fill all fields");
return;
}

locked = true;
window.location.href = "home.html";
}

});
