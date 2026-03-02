import RestaurantImg from '../assets/restaurant.jpg';

export function loadHome() {
    const content = document.createElement('div');
    content.classList.add('tab-content');

    const title = document.createElement('h1');
    title.textContent = "Big Bang Brewery";

    const myImage = new Image();
    myImage.src = RestaurantImg;
    myImage.classList.add('hero-image');
    const infoGrid = document.createElement('div');
    infoGrid.classList.add('menu-grid', 'home-grid'); 

    const infoCards = [
        { title: "The Menu", body: "Taplist updated daily! (Mostly by accident)." },
        { title: "Opening Times", body: "Mon–Fri: 42:00 to Sunset | Sat–Sun: Until the heat death of the universe."},
        { title: "Location", body: "Unit 42, Sector 7G, The Western Spiral Arm (Right past the bypass)." },
        { title: "Pick up", body: "4 packs available for everything we brew!"}
    ];

    infoCards.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('beer-card');
        card.innerHTML = `
            <div class="beer-header">
                <h3>${item.title}</h3>
            </div>
            <p class="description"><em>${item.body}</em></p>
        `;

        infoGrid.appendChild(card);
    });

    content.append(title, myImage, infoGrid);
    return content;
}