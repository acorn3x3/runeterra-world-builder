/* Imports */

/* Get DOM Elements */

const userArticle = document.getElementById('user-article');
const nameInput = document.getElementById('name');
const championSelect = document.getElementById('champion-select');
const addAdjButton = document.getElementById('add-adj-button');
const citySelect = document.getElementById('city-select');
const adjsList = document.getElementById('adjs-list');
const encounterHeader = document.getElementById('encounter-header');
const userChampion = document.getElementById('user-champion');
const adjInput = document.getElementById('adj-input');

/* State */
let encounter = {
    name: 'Encounter',
    champion: '',
    city: '',
    adjs: [],
};

/* Events */

nameInput.addEventListener('input', () => {
    encounter.name = nameInput.value;
    displayEncounter();
});

championSelect.addEventListener('change', () => {
    encounter.champion = championSelect.value;
    displayEncounter();
});

citySelect.addEventListener('change', () => {
    encounter.champion = citySelect.value;
    displayEncounter();
});

addAdjButton.addEventListener('click', () => {
    const adj = adjInput.value;
    encounter.adjs.push(adj);
    displayAdjs();
    adjInput.value = '';
});

/* Display Functions */

function displayEncounter() {
    userArticle.classList.value = encounter.city;
    encounterHeader.textContent = encounter.name;
    userChampion.src = 'assets/' + encounter.champion + '.png';
}

function displayAdjs() {
    adjsList.innerHTML = '';
}

displayEncounter();
displayAdjs();
