import { createHomepage } from "./home.js";
import { createMenu } from "./menu.js";
import { createContact } from "./contact.js";

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

// contact button event listener
const contactButton = document.querySelector('.contact');
contactButton.addEventListener('click', () => {
    clearContent();
    createContact();
});

function clearContent() {
    const content = document.querySelector('#content');
    content.innerHTML = "";
}

