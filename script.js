const form =
document.getElementById("loginForm");

form.addEventListener("submit",(e)=>{

e.preventDefault();

/* later connect database */

window.location.href =
"home.html";

});

function goSignup(){

window.location.href =
"signup.html";

}
