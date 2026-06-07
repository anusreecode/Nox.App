let state = {
  locked: false
};

/* NAVIGATION LOCK */
function lock(){
  state.locked = true;
}

function unlock(){
  state.locked = false;
}

/* LOGIN */
document.addEventListener("click", (e) => {

  if(e.target.id === "loginBtn"){
    if(state.locked) return;

    const email = document.getElementById("loginEmail").value;
    const pass = document.getElementById("loginPassword").value;

    if(!email || !pass){
      alert("Fill all fields");
      return;
    }

    lock();
    window.location.href = "home.html";
  }

  if(e.target.id === "signupBtn"){
    if(state.locked) return;

    const n = document.getElementById("suName").value;
    const e1 = document.getElementById("suEmail").value;
    const p = document.getElementById("suPass").value;

    if(!n || !e1 || !p){
      alert("Fill all fields");
      return;
    }

    lock();
    window.location.href = "home.html";
  }

  if(e.target.id === "goSignup"){
    if(state.locked) return;
    window.location.href = "signup.html";
  }

  if(e.target.id === "goLogin"){
    if(state.locked) return;
    window.location.href = "index.html";
  }

});
