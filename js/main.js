var elButton = document.querySelector(".btn");
var elButtonMenu = document.querySelector(".btn__menu");
var elButtonExit = document.querySelector(".btn__exit");
var elNav = document.querySelector(".nav");

elButton.addEventListener("click", () => {
    elButtonMenu.classList.toggle("Menu")
    elButtonExit.classList.toggle("Exit")
    elNav.classList.toggle("nav__blok")
} )