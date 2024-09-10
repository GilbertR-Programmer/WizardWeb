// Array of first names from The Sopranos
const names = [
    "Tony", "Carmela", "Christopher", "Silvio", "Paulie", "Meadow", 
    "A.J.", "Janice", "Junior", "Livia", "Artie", "Adriana", 
    "Vito", "Bobby", "Ralph", "Johnny", "Furio", "Rosalie"
];


const spells = [
    "Summon {count} {entity}(s)", // Example: "Summon a thousand bees"
    "Summon {entity}", // Example: "Summon demon"
    "Summon {object}", // Example: "Summon lantern"
    "Summon {disease}", // Example: "Summon plague"

    "Conjure {count} {entity}(s)", // Example: "Conjure a thousand bees"
    "Conjure nearest {entity}", // Example: "Conjure nearest demon"
    "Conjure {entity}", // Example: "Conjure demon"
    "Conjure {object}", // Example: "Conjure lantern"

    "Create {object}", // Example: "Create lantern"

    "Contact nearest {entity}", // Example: "Contact nearest dog"

    "Become {entity}", // Example: "Become cat"
    "Teleport to {place}", // Example: "Teleport to nearest market"
    "Speak {language}", // Example: "Speak Italian"
    "Hasten {entity}", // Example: "Hasten man"
    "Launch {object}", // Example: "Launch disc"
    "Commune with {entity}", // Example: "Commune with shopkeeper"
    "Charm {entity}", // Example: "Charm person"
    "Open portal to {place}", // Example: "Open portal unto the 9th circle of hell"
    "Behead {entity}", // Example: "Behead eldest daughter"
    
    "Un toast object",
    "Fire blast", 
    "Telekinesis", 
    "Water breathing", 
    "Thunderstorm",
    "Invisibility", 
    "Levitation", 
    "Ice shard", 
    "Healing touch", 
    "Shadow cloak", 
    "Lightning strike", 
    "Plant growth", 
    "Time freeze", 
    "Shape shift", 
    "Flay", 
    "Ritual of exorcism", 
    "Orbital bombardment", 
    "Heal", 
    "Mirror self",
    "Warm hands",
    "Divine opinion",
    "Become moustached"
];

// Count (numbers for spell variation)
const count = [
    "one", "two", "three", "four", "five", "six", 
    "seven", "eight", "nine", "ten", "a dozen", 
    "twenty", "thirty", "forty", "fifty", "a hundred", 
    "a thousand", "infinite", "dozens of", "a few", "several"
];

// Objects/Items
const objectsItems = [
    "gabagool", "ham sandwich", 
    "pizza delivery", "draught", 
    "lost sock", "spaghetti", "disc", "key", 
    "scroll", "ring", "lantern", "crystal", 
    "sword", "shield", "gold coin", "potion", 
    "lost sock","copious spaghetti"
];

// Entities (including Creatures/Monsters)
const entities = [
    "cat", "familiar", "demon", "dog", "man", 
    "shopkeeper", "wise feline", "bat", 
    "enraged goose", "giant ant", 
    "gorilla",
    "goblin", "dragon", "zombie", "vampire", 
    "werewolf", "mermaid", "fairy", "eldest daughter", 
     "bee", "frog","sand witch",
    "youngest son"
];

// Places
const places = [
    "nearest market", "the 9th circle of hell", 
    "shoppe", "a field", "closest shoppe"
];

// Language or Nationality
const languageNationality = [
    "Italian", "French", "Spanish", "German", 
    "Latin", "Chinese", "Japanese", "Russian"
];

// Diseases
const diseases = [
    "plague", "pestilence", "blight", "curse", 
    "infection", "malady", "illness", "sickness"
];

// Function to get a random element from an array
function randomArrayElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Function to generate a random spell, either a full spell or a spell with substitution
function randomSpell() {
    // Get a random spell
    let spell = randomArrayElement(spells);
    //return it with a substitutuiion word if it needs one
    return spell
        .replace("{count}", randomArrayElement(count))
        .replace("{entity}", randomArrayElement(entities))
        .replace("{object}", randomArrayElement(objectsItems))
        .replace("{language}", randomArrayElement(languageNationality))
        .replace("{disease}", randomArrayElement(diseases))
        .replace("{place}", randomArrayElement(places))
}

// Function to generate a new character with a random name and random spells
function generateCharacter() {
    document.getElementById("characterName").innerText = randomArrayElement(names);
    document.getElementById("spell1").innerText = randomSpell();
    document.getElementById("spell2").innerText = randomSpell();
    document.getElementById("spell3").innerText = randomSpell();
    document.getElementById("spell4").innerText = randomSpell();
}

window.onload = generateCharacter;
