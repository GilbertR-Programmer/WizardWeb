// Array of first names from The Sopranos
const sopranosNames = [
    "Tony", "Carmela", "Christopher", "Silvio", "Paulie", "Meadow", 
    "A.J.", "Janice", "Junior", "Livia", "Artie", "Adriana", 
    "Vito", "Bobby", "Ralph", "Johnny", "Furio", "Rosalie"
];

// Array of fun magic-related spells
const magicSpells = [
    "Summon one thousand bees", "Fire blast", "Create frog", 
    "Telekinesis", "Water breathing", "Invisibility", 
    "Levitation", "Become cat", "Summon thunderstorm", 
    "Teleportation", "Ice shard", "Healing touch", 
    "Shadow cloak", "Lightning strike", "Plant growth", 
    "Summon familiar", "Time freeze", "Shape shift",
    "Summon demon", "Contact nearest dog","Create gabagool",
    "Speak Italian", "Hasten man", "Launch disc"            
];

// Function to get a random element from an array
function randomArrayElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Function to generate a new character with a random name and random spells
function generateCharacter() {
    document.getElementById("characterName").innerText = randomArrayElement(sopranosNames);
    document.getElementById("spell1").innerText = randomArrayElement(magicSpells);
    document.getElementById("spell2").innerText = randomArrayElement(magicSpells);
    document.getElementById("spell3").innerText = randomArrayElement(magicSpells);
    document.getElementById("spell4").innerText = randomArrayElement(magicSpells);
}

window.onload = generateCharacter;