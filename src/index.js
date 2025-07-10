import { createHomepage } from "./home.js";
import { createMenu } from "./menu.js";

createHomepage();

// home button event listener
const homeButton = document.querySelector('.home');
homeButton.addEventListener('click', () => {
    clearContent();
    createHomepage();
});

// menu button event listener
const menuButton = document.querySelector('.menu');
menuButton.addEventListener('click', () => {
    clearContent();
    createMenu();
});

function clearContent() {
    const content = document.querySelector('#content');
    content.innerHTML = "";
}

