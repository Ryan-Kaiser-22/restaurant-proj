import RestaurantImg from '../assets/restaurant.jpg';

export function loadHome() {
    const content = document.createElement('div');
    content.classList.add('tab-content');

    const title = document.createElement('h1');
    title.textContent = "Big Bang Brewery";

    // Create the image INSIDE the function
    const myImage = new Image();
    myImage.src = RestaurantImg;
    myImage.style.maxWidth = "100%"; // Keep it inside the dark box!
    myImage.style.borderRadius = "10px";

    const description = document.createElement('p');
    description.textContent = "Taplist updated daily!";

    content.appendChild(title);
    content.appendChild(myImage); // Append the image here
    content.appendChild(description);

    return content;
}