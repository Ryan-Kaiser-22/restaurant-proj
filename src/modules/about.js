import { loadContact } from './contact.js';

export function loadAbout() {
    const content = document.createElement('div');
    content.classList.add('tab-content');

    const title = document.createElement('h1');
    title.textContent = "About the Big Bang Brewery";

    const aboutCard = document.createElement('div');
    aboutCard.classList.add('beer-card', 'about-card'); // Reusing your beer-card styles

    aboutCard.innerHTML = `
        <div class="beer-header">
            <h3>A Brief History of Time (and Hops)</h3>
        </div>
        <div class="description">
            <p>
                The <strong>Big Bang Brewery</strong> is an extraordinary venture in the history of brewing. 
                It is built on the fragmented remains of an exploded star, enclosed in a giant time-bubble, 
                and projected forward in time to the precise moment of the Gulp.
            </p>
            <p>
                Many critics of the Brewery claim that the "Total Creation" experience is a bit loud for a 
                Tuesday afternoon, but most regular patrons agree that watching the entire cosmos form 
                is the only appropriate backdrop for a well-poured Triple IPA.
            </p>
            <p>
                You can arrive for a pint, watch the universe begin while you wait for your head to settle, 
                and then return to your own time—provided you’ve remembered to pay your tab in the past, 
                as compound interest in a time-bubble can be, frankly, quite rude.
            </p>
            <p><em>"The best beer in the multiverse, or at least the loudest." — The Hitchhiker's Guide</em></p>
        </div>
    `;

    const contactBtn = document.createElement('button');
    contactBtn.classList.add('order-btn');
    contactBtn.textContent = "Contact Us";

    contactBtn.addEventListener('click', () => {
        const tabBody = document.getElementById('tab-body');
        tabBody.innerHTML = '';
        tabBody.appendChild(loadContact());
        const buttons = document.querySelectorAll('nav button');
        buttons.forEach(btn => btn.classList.remove('active-tab'));
});

aboutCard.appendChild(contactBtn);
content.appendChild(aboutCard);

    return content;
}