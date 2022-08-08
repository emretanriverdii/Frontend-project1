const hamburger = document.querySelector("#hamburger");
const sagnavbar = document.querySelector(".sag-menu");
const emre = document.querySelector("#emre");

hamburger.addEventListener("click",()=>{
    sagnavbar.style.display = "none";
    emre.style.display = "block";
})
emre.addEventListener("click",()=>{
    sagnavbar.style.display = "flex";
    emre.style.display = "none"
})