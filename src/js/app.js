import * as functions from "./modules/functions.js";

functions.isWebp();

const headerButton = document.querySelector(".header__button");
const headerMenu = document.querySelector(".header__menu");
const headerLinks = document.querySelectorAll(".header__link");

let menuOpened = false;
const menuToggle = () => {
  menuOpened = !menuOpened;
  headerButton.classList.toggle("open");
  headerMenu.classList.toggle("open");
};

headerButton.onclick = menuToggle;


window.onclick = (e) => {
  if (
    menuOpened &&
    !e.composedPath().includes(headerButton) &&
    !e.composedPath().includes(headerMenu)
  )
    menuToggle();
};

headerLinks.forEach(el => {
  el.addEventListener('click', () => {
    menuToggle()
  })
})