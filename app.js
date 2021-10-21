import { pokemonArr } from './data/pokemon.js';
console.log(pokemonArr);
import { encounterPokemon, capturePokemon } from './storage-utils.js';



const pokemonImg1 = document.getElementById('pokemon-img1');
const pokemonImg2 = document.getElementById('pokemon-img2');
const pokemonImg3 = document.getElementById('pokemon-img3');
const pokemonRadio1 = document.getElementById('pokemon-radio1');
const pokemonRadio2 = document.getElementById('pokemon-radio2');
const pokemonRadio3 = document.getElementById('pokemon-radio3');

const button = document.getElementById('choose');


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
    capturePokemon(pokemon1.id);
    pokemonImg1.src = pokemon1.url_image;
    pokemonRadio1.value = pokemon1.id;

    let pokemon2 = pokemonArr[random2];
    capturePokemon(pokemon2.id);
    pokemonImg2.src = pokemon2.url_image;
    pokemonRadio2.value = pokemon2.id;

    let pokemon3 = pokemonArr[random3];
    capturePokemon(pokemon3.id);
    pokemonImg3.src = pokemon3.url_image;
    pokemonRadio3.value = pokemon3.id;
};
let totalPlays = 0;
generatePokemon();

button.addEventListener('click', ()=>{
    totalPlays++;
    const chosenRadio = document.querySelector('input[type=radio]:checked');
    const chosenId = chosenRadio.value;
    console.log(chosenId);
    encounterPokemon(chosenId);

    generatePokemon();

    if (chosenRadio){
        const chosenId = chosenRadio.value;
        totalPlays++;
        encounterPokemon(chosenId);
        if (totalPlays >= 3){
            window.location = './results';
        } else {
            generatePokemon();
        }
    }
});