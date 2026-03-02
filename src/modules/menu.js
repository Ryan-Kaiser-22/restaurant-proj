const tapList = [
    {
        name: "Event Horizon",
        style: "Triple IPA",
        hops: "Citra, Mosaic, Simcoe",
        abv: "10.5%",
        notes: "Dank, resinous, and powerful enough to warp time."
    },
    {
        name: "Nebula Juice",
        style: "Hazy IPA",
        hops: "Galaxy, Nelson Sauvin, El Dorado",
        abv: "7.2%",
        notes: "Cloudy with a chance of tropical citrus and passionfruit."
    },
    {
        name: "Supernova Sour",
        style: "Fruit Gose",
        hops: "Castaic (Aroma), Hallertau",
        abv: "4.8%",
        notes: "A bright explosion of tart raspberry and sea salt."
    },
    {
        name: "Dark Matter Stout",
        style: "Imperial Milk Stout",
        hops: "Fuggles, Goldings",
        abv: "9.0%",
        notes: "Notes of roasted coffee and chocolate that light cannot escape."
    },
    {
        name: "Light Speed Lager",
        style: "Pilsner",
        hops: "Saaz, Tettnanger",
        abv: "4.5%",
        notes: "Crisp, clean, and refreshing for the long haul through the stars."
    },
    {
        name: "Void Walker",
        style: "Black IPA",
        hops: "Columbus, Centennial, Cascade",
        abv: "7.8%",
        notes: "Dark as the deep vacuum of space with a surprising citrus bite."
    },
    {
        name: "Solar Flare",
        style: "Blood Orange Wheat",
        hops: "Mandarina Bavaria",
        abv: "5.4%",
        notes: "Radiant citrus notes that burn bright on the palate."
    },
    {
        name: "Pulsar Pale Ale",
        style: "American Pale Ale",
        hops: "Chinook, Amarillo",
        abv: "5.8%",
        notes: "Rhythmic bitterness with steady waves of grapefruit and pine."
    },
    {
        name: "Gamma Ray",
        style: "West Coast IPA",
        hops: "Warrior, Simcoe, CTZ",
        abv: "8.2%",
        notes: "High-energy bitterness with a clean, radioactive-gold finish."
    },
    {
        name: "Lunar Husk",
        style: "Toasted Coconut Porter",
        hops: "Willamette",
        abv: "6.5%",
        notes: "Silky chocolate depth with a drift of roasted coconut."
    },
    {
        name: "Cosmic Dust",
        style: "Unfiltered Pilsner",
        hops: "Loral, Sterling",
        abv: "4.9%",
        notes: "Crisp and earthy, like the settling particles of a new nebula."
    },
    {
        name: "Red Giant",
        style: "Imperial Amber Ale",
        hops: "Mount Hood, Northern Brewer",
        abv: "9.1%",
        notes: "Massive malty body with a sprawling caramel expansion."
    },
    {
        name: "Zero Gravity",
        style: "Session IPA",
        hops: "Azacca, Vic Secret",
        abv: "4.2%",
        notes: "Light enough to float, but packed with tropical momentum."
    },
    {
        name: "Wormhole White",
        style: "Belgian Witbier",
        hops: "Saaz",
        abv: "5.2%",
        notes: "Spiced with coriander and orange peel for a shortcut to refreshment."
    },
    {
        name: "Void Walker",
        style: "Black IPA",
        hops: "Columbus, Centennial, Cascade",
        abv: "7.8%",
        notes: "Dark as the deep vacuum of space with a surprising citrus bite."
    },
    {
        name: "Solar Flare",
        style: "Blood Orange Wheat",
        hops: "Mandarina Bavaria",
        abv: "5.4%",
        notes: "Radiant citrus notes that burn bright on the palate."
    },
    {
        name: "Pulsar Pale Ale",
        style: "American Pale Ale",
        hops: "Chinook, Amarillo",
        abv: "5.8%",
        notes: "Rhythmic bitterness with steady waves of grapefruit and pine."
    },
    {
        name: "Gamma Ray",
        style: "West Coast IPA",
        hops: "Warrior, Simcoe, CTZ",
        abv: "8.2%",
        notes: "High-energy bitterness with a clean, radioactive-gold finish."
    },
    {
        name: "Lunar Husk",
        style: "Toasted Coconut Porter",
        hops: "Willamette",
        abv: "6.5%",
        notes: "Silky chocolate depth with a drift of roasted coconut."
    },
    {
        name: "Cosmic Dust",
        style: "Unfiltered Pilsner",
        hops: "Loral, Sterling",
        abv: "4.9%",
        notes: "Crisp and earthy, like the settling particles of a new nebula."
    },
    {
        name: "Red Giant",
        style: "Imperial Amber Ale",
        hops: "Mount Hood, Northern Brewer",
        abv: "9.1%",
        notes: "Massive malty body with a sprawling caramel expansion."
    },
    {
        name: "Zero Gravity",
        style: "Session IPA",
        hops: "Azacca, Vic Secret",
        abv: "4.2%",
        notes: "Light enough to float, but packed with tropical momentum."
    },
    {
        name: "Wormhole White",
        style: "Belgian Witbier",
        hops: "Saaz",
        abv: "5.2%",
        notes: "Spiced with coriander and orange peel for a shortcut to refreshment."
    },
    {
        name: "Stardust Saison",
        style: "Farmhouse Ale",
        hops: "Saphir, Tettnanger",
        abv: "6.7%",
        notes: "Peppery, dry, and effervescent like a sparkling comet tail."
    }
];

export function loadMenu() {
    const content = document.createElement('div');
    content.classList.add('tab-content');

    const title = document.createElement('h1');
    title.textContent = "Big Bang Brewery";
    content.appendChild(title);

    const menuGrid = document.createElement('div');
    menuGrid.classList.add('menu-grid');

    tapList.forEach(beer => {
        const beerCard = document.createElement('div');
        beerCard.classList.add('beer-card');

        beerCard.innerHTML = `
            <div class="beer-header">
                <h3>${beer.name}</h3>
                <span class="abv">${beer.abv}</span>
            </div>
            <p class="style">${beer.style}</p>
            <p class="hops"><strong>Hops:</strong> ${beer.hops}</p>
            <p class="description"><em>${beer.notes}</em></p>
        `;

        const orderBtn = document.createElement('button');
        orderBtn.classList.add('order-btn');
        orderBtn.textContent = `Launch ${beer.name}`;

        orderBtn.addEventListener('click', () => {
            console.log(`Dispatching a cold ${beer.name}`);
            alert(`${beer.name} is on its way!`);
        });

        beerCard.appendChild(orderBtn);
        menuGrid.appendChild(beerCard);
    });

    content.appendChild(menuGrid);
    return content;
}