import { pokemon } from './pokemon.js';
console.log(pokemon);

const caughtSpan = document.getElementById('caught');
const chosenSpan = document.getElementById('chosen');
const appearSpan = document.getElementById('appeared');

const pokemonImg1 = document.getElementById('poke-img1');
const pokemonImg2 = document.getElementById('poke-img2');
const pokemonImg3 = document.getElementById('poke-img3');
const button = document.getElementById('choose');

let caught = 0;
let chosen = 0;
let appeared = 0;


const generatePokemon = ()=>{
    let random1 = Math.floor(Math.random() * pokemon.length);
    let random2 = Math.floor(Math.random() * pokemon.length);
    let random3 = Math.floor(Math.random() * pokemon.length);

    while (
        random1 === random2 ||
      random1 === random3 ||
      random2 === random3
    ) {

        random1 = Math.floor(Math.random() * pokemon.length);
        random1 = Math.floor(Math.random() * pokemon.length);
        random1 = Math.floor(Math.random() * pokemon.length);
    }
    console.log(random1, random2);

    let pokemon1 = pokemon[random1];
    pokemonImg1.src = pokemon1.url_image;

    let pokemon2 = pokemon[random2];
    pokemonImg2.src = pokemon2.url_image;

    let pokemon3 = pokemon[random3];
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