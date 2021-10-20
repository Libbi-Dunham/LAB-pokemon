import { pokemonArr } from './data/pokemon.js';
console.log(pokemonArr);

const caughtSpan = document.getElementById('caught');
const chosenSpan = document.getElementById('chosen');
const appearSpan = document.getElementById('appeared');

const pokemonImg1 = document.getElementById('pokemon-img1');
const pokemonImg2 = document.getElementById('pokemon-img2');
const pokemonImg3 = document.getElementById('pokemon-img3');
const button = document.getElementById('choose');

let caught = 0;
let chosen = 0;
let appeared = 0;


const generatePokemon = ()=>{
    let random1 = Math.floor(Math.random() * pokemonArr.length);
    let random2 = Math.floor(Math.random() * pokemonArr.length);
    let random3 = Math.floor(Math.random() * pokemonArr.length);

    while (
        random1 === random2 ||
      random1 === random3 ||
      random2 === random3
    ) {

        random1 = Math.floor(Math.random() * pokemonArr.length);
        random1 = Math.floor(Math.random() * pokemonArr.length);
        random1 = Math.floor(Math.random() * pokemonArr.length);
    }
    console.log(random1, random2);

    let pokemon1 = pokemonArr[random1];
    pokemonImg1.src = pokemon1.url_image;

    let pokemon2 = pokemonArr[random2];
    pokemonImg2.src = pokemon2.url_image;

    let pokemon3 = pokemonArr[random3];
    pokemonImg3.src = pokemon3.url_image;
};

generatePokemon();

button.addEventListener('click', ()=>{
    const selected = document.querySelector('input[type=radio]:checked');

    generatePokemon();
    appeared++;
    appeared++;
    appeared++;
    appearSpan.textContent = appeared;
});