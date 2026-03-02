import HopPattern from './assets/hop.jpg';
import { loadHome } from './modules/homepage.js'; 
import { loadMenu } from './modules/menu.js';
import { loadAbout } from './modules/about.js';
import { loadContact} from './modules/contact.js';
import './style.css';

const homeBtn = document.getElementById('home-btn');
const menuBtn = document.getElementById('menu-btn');
const aboutBtn = document.getElementById('about-btn');
const contactBtn = document.getElementById('contact-btn');
const tabBody = document.getElementById('tab-body'); 

function render(loadFunction, clickedButton) {
    tabBody.innerHTML = ''; 
    tabBody.appendChild(loadFunction());
    if (clickedButton) {
        const buttons = document.querySelectorAll('nav button');
        buttons.forEach(btn => btn.classList.remove('active-tab'));
        clickedButton.classList.add('active-tab');
    }
}

homeBtn.addEventListener('click', (e) => render(loadHome, e.target));
menuBtn.addEventListener('click', (e) => render(loadMenu, e.target));
aboutBtn.addEventListener('click', (e) => render(loadAbout, e.target));
contactBtn.addEventListener('click', (e) => render(loadContact, e.target));

render(loadHome, homeBtn);


