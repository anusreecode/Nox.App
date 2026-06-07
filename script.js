const loginPage = document.getElementById("loginPage");
const signupPage = document.getElementById("signupPage");

const toSignup = document.getElementById("toSignup");
const toLogin = document.getElementById("toLogin");

const loginBtn = document.getElementById("loginBtn");
const signupBtn = document.getElementById("signupBtn");

let busy = false; // 🔥 prevents double clicks

function switchPage(show, hide){
  if(busy) return;
  busy = true;

  hide.classList.remove("active");

  setTimeout(()=>{
    show.classList.add("active");
    busy = false;
  },300);
}

/* LOGIN → SIGNUP */
toSignup.onclick = () => switchPage(signupPage, loginPage);

/* SIGNUP → LOGIN */
toLogin.onclick = () => switchPage(loginPage, signupPage);

/* LOGIN FLOW */
loginBtn.onclick = () => {
  const email = document.getElementById("loginEmail").value;
  const pass = document.getElementById("loginPass").value;

  if(!email || !pass){
    alert("Fill both fields");
    return;
  }

  loginBtn.innerText = "ENTERING...";
  setTimeout(()=>{
    window.location.href = "home.html";
  },1200);
};

/* SIGNUP FLOW */
signupBtn.onclick = () => {
  const name = document.getElementById("suName").value;
  const email = document.getElementById("suEmail").value;
  const pass = document.getElementById("suPass").value;
  const confirm = document.getElementById("suConfirm").value;

  if(!name || !email || !pass || !confirm){
    alert("Fill all fields");
    return;
  }

  if(pass !== confirm){
    alert("Passwords don't match");
    return;
  }

  signupBtn.innerText = "AWAKENING...";

  setTimeout(()=>{
    window.location.href = "home.html";
  },1200);
};
