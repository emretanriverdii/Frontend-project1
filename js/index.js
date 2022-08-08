const signupacma = document.querySelector(".sign-up");
const loginacma = document.querySelector(".login");
const register = document.querySelector(".register-ana-form");
const signupkapatma = document.querySelector(".signupkapatma");
const loginkapatma = document.querySelector(".loginkapatma");
const ortamenuitemler = document.querySelector(".orta-menu-itemler");
const loginform = document.querySelector(".login-ana-form");

signupacma.addEventListener("click",()=>{
    register.style.display = "flex";
    ortamenuitemler.style.display = "none";
    loginform.style.display="none";
})
signupkapatma.addEventListener("click",()=>{
    register.style.display="none";
    ortamenuitemler.style.display = "flex";
})

loginacma.addEventListener("click",()=>{
    loginform.style.display="flex";
    ortamenuitemler.style.display = "none";
    register.style.display="none";
})
loginkapatma.addEventListener("click",()=>{
    loginform.style.display="none";
    ortamenuitemler.style.display = "flex";
})

