// Code for making the random characters

// Array of first names from The Sopranos
const names = [
  "Tony",
  "Carmela",
  "Christopher",
  "Silvio",
  "Paulie",
  "Meadow",
  "A.J.",
  "Janice",
  "Junior",
  "Livia",
  "Artie",
  "Adriana",
  "Vito",
  "Bobby",
  "Ralph",
  "Johnny",
  "Furio",
  "Rosalie",
];

const spells = [
  "{Element} Bolt",
  "{Element} Blast",
  "{Element} Cloak",
  "{Element} Strike",
  "{Element} Step",
  "{Element} Shard",
  "Conjure {Item}",
  "Summon {Item}",
  "Create {Item}",
  "Conjure {Creature}",
  "Summon {Creature}",
  "Create {Creature}",
  "{Element}storm",
  "{Creature} Shape",
  //we add the above ones twice so they happen more often
  "{Element} Bolt",
  "{Element} Blast",
  "{Element} Cloak",
  "{Element} Strike",
  "{Element} Step",
  "{Element} Shard",
  "Conjure {Item}",
  "Summon {Item}",
  "Create {Item}",
  "Conjure {Creature}",
  "Summon {Creature}",
  "Create {Creature}",
  "{Element}storm",
  "{Creature} Shape",
  "{Creature} Blast",
  "Evade",
  "Hasten",
  "Strength",
  "Shrinking",
  "Growth",
  "Commune with {Profession}",
  "Commune with {Creature}",
  "Heal",
  "{Element}storm",
  "Speak {Creature}",
  "Illusion",
  "Mirror Self",
  "Double Spell",
  "Divine Opinion",
  "Invisibility",
  "Minor Telekinesis ",
  "Charm",
  "{Profession} Mind",
  "Shape Shift",
  "Water Breathing",
  "Slow Falling",
  "Fast Falling",
  "Echo",
  "Replicate",
  "Weakness",
  "Set Alarm",
  "Raise Zombie",
  "Give Life",
  "Dimension Shift",
  "Curse Mark",
  "Magic Hand",
  "Blind",
  "Calm",
  "{Element} Elemental",
  "Alter Weather",
  "True Vision",
  "Detect Magic",
  "Quick Teleport",
  "Frighten",
  "Unlock",
  "Boost Magic",
  "Choke",
  "Throw Voice",
  "Hidden Ear",
  "Entrap",
  "Lessen Gravity",
  "Sleep",
  "Mind Peek",
  "Silence Sphere",
  "Noise Cube",
  "Earth Wall",
  "Levitate",
];

// Elements
const elements = [
  "Fire",
  "Flame",
  "Ice",
  "Frost",
  "Thunder",
  "Lightning",
  "Shadow",
  "Light",
  "Water",
  "Aqua",
  "Force",
  "Sunlight",
  "Radiance",
  "Wind",
  "Mirror",
  "Void",
];

// Creatures
const creatures = [
  "Gorilla",
  "Goblin",
  "Human",
  "Elf",
  "Dwarf",
  "Bear",
  "Dog",
  "Wolf",
  "Pig",
  "Cow",
  "Buffalo",
  "Cat",
  "Walrus",
  "Centipede ",
  "Orc",
  "Kobold",
  "Giant Ant",
];

// items
const items = [
  "Gold Coin",
  "Table",
  "Sword",
  "Compass",
  "Rope",
  "Chain",
  "Axe",
  "Mirror",
  "Clothes",
  "Rock",
  "Silver Coin",
  "Staff",
  "Lantern",
  "Rucksack",
  "Hammer",
  "Shovel",
  "Key",
  "Book",
  "Ring",
];

// professions
const professions = [
  "Mason",
  "Doctor",
  "Warrior",
  "Blacksmith",
  "Bartender",
  "Shopkeeper ",
  "Innkeeper",
  "Assassin",
  "Farmer",
  "Butcher",
  "Beekeeper",
  "Tailor",
  "Baker",
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
    .replace("{Element}", randomArrayElement(elements))
    .replace("{Creature}", randomArrayElement(creatures))
    .replace("{Profession}", randomArrayElement(professions))
    .replace("{Item}", randomArrayElement(items));
}

// Function to generate a new character with a random name and random spells
function generateCharacter() {
  document.getElementById("characterName").innerText =
    randomArrayElement(names);
  document.getElementById("spell1").innerText = randomSpell();
  document.getElementById("spell2").innerText = randomSpell();
  document.getElementById("spell3").innerText = randomSpell();
  document.getElementById("spell4").innerText = randomSpell();
}

// Code For Adding The Footer
const footer =
  "We be wizards V40, Use however you want, Created by Gilbert Reid";

// Function to generate a new character with a random name and random spells
function addFooter() {
  document.getElementById("footer").innerText = footer;
}

// Onload
function loadDuties() {
  addFooter();
  if(document.getElementById("spell1") != null){
    generateCharacter();
  }
}

window.onload = loadDuties;
