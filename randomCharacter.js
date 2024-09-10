// Array of first names from The Sopranos
const names = [
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
    "Speak Italian", "Hasten man", "Launch disc",
    "Conjure Damp", "Summon Overcast", "Commune with shopkeeper",
    "Summon parental disappointment", "Conjure ham sandwich",
    "Conjure sand witch", "Flay", "Ritual of exorcism",
    "Orbital bombardment", "Charm person", "Heal",
    "Summon plague", "Mirror self", "Comprehend script",
    "Conjure gorilla", "Open portal unto the 9th circle of hell",
    "Summon twelve bats", "Commune with wife",
    "Summon copious spaghetti", "Summon existential dread", 
    "Conjure lost sock", "Teleport unto nearest market", 
    "Summon wise feline", "Conjure draught", 
    "Summon enraged goose", "Summon giant ant", 
    "Conjure pizza delivery", "Become mildly sticky", 
    "Become mustached", "Un toast object",
    "Behead eldest daughter", "Divine opinion"

];

// Function to get a random element from an array
function randomArrayElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Function to generate a new character with a random name and random spells
function generateCharacter() {
    document.getElementById("characterName").innerText = randomArrayElement(names);
    document.getElementById("spell1").innerText = randomArrayElement(magicSpells);
    document.getElementById("spell2").innerText = randomArrayElement(magicSpells);
    document.getElementById("spell3").innerText = randomArrayElement(magicSpells);
    document.getElementById("spell4").innerText = randomArrayElement(magicSpells);
}

window.onload = generateCharacter;