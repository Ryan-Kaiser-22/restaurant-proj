import { loadHome } from './homepage.js'; 

export function loadContact() {
    const content = document.createElement('div');
    content.classList.add('tab-content');

    const title = document.createElement('h1');
    title.textContent = "Interstellar Communications";

    const contactCard = document.createElement('div');
    contactCard.classList.add('beer-card');

    contactCard.innerHTML = `
        <div class="beer-header">
            <h3>How to Reach Us</h3>
        </div>
        <div class="description">
            <p><strong>Subspace Frequency:</strong> 42.4242 MHz</p>
            <p><strong>Postal Address:</strong> 
               The Third Pebble from the Left,<br>
               Sector 7G, Sol System (Low Orbit).
            </p>
            <p><strong>Note:</strong> If you are calling from a planet currently being demolished for a hyperspace bypass, please hang up and consult your local Vogon representative.</p>
        </div>
    `;

    const backBtn = document.createElement('button');
    backBtn.classList.add('order-btn');
    backBtn.textContent = "Return to Safety";
    
    backBtn.addEventListener('click', () => {
        const tabBody = document.getElementById('tab-body');
        const homeBtn = document.getElementById('home-btn');

        tabBody.innerHTML = '';
        tabBody.appendChild(loadHome());

        const buttons = document.querySelectorAll('nav button');
        buttons.forEach(btn => btn.classList.remove('active-tab'));
        if (homeBtn) homeBtn.classList.add('active-tab');
    });

    contactCard.appendChild(backBtn);
    content.append(title, contactCard);

    return content;
}