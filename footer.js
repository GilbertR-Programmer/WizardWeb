// Array of first names from The Sopranos
const footer = "We be wizards V1.1.2, Use however you want, Created by Gilbert Reid";


// Function to generate a new character with a random name and random spells
function addFooter() {
  document.getElementById("footer").innerText = footer;
}

window.onload = addFooter;
