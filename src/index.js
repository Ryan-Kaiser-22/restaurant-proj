import HopPattern from './assets/hop.jpg';

import { loadHome } from './modules/homepage.js'; // Matches your filename
import { loadMenu } from './modules/menu.js';
import { loadAbout } from './modules/about.js';
import './style.css';

// ... imports stay the same ...

const homeBtn = document.getElementById('home-btn');
const menuBtn = document.getElementById('menu-btn');
const aboutBtn = document.getElementById('about-btn');
const tabBody = document.getElementById('tab-body'); 

function render(loadFunction, clickedButton) {
    tabBody.innerHTML = ''; 
    tabBody.appendChild(loadFunction());

    // Only try to style the button if we actually passed one in
    if (clickedButton) {
        const buttons = document.querySelectorAll('nav button');
        buttons.forEach(btn => btn.classList.remove('active-tab'));
        clickedButton.classList.add('active-tab');
    }
}

// REMOVE the extra listeners. Only use these three:
homeBtn.addEventListener('click', (e) => render(loadHome, e.target));
menuBtn.addEventListener('click', (e) => render(loadMenu, e.target));
aboutBtn.addEventListener('click', (e) => render(loadAbout, e.target));

// Initial load
render(loadHome, homeBtn);


