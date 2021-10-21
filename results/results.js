import { pokemonArr } from '../data/pokemon.js';
import { getResults, findById } from '../data/storageUtils.js';

const results = getResults();

const main = document.getElementById('main');

for (let item of results){
    const pokemon = findById(item.id, pokemonArr);
    console.log(pokemon);
    console.log(item);
    console.log(pokemonArr);

    const div = document.createElement('div');
    const img = document.createElement('img');
    img.src = pokemon.url_image;
    const header = document.createElement('h2');
    const resultSpan1 = document.createElement('span');
    resultSpan1.textContent = `encounter: ${item.encounter}`;
    const resultSpan2 = document.createElement('span');
    resultSpan2.textContent = `capture: ${item.capture}`;

    div.append(header, img, resultSpan1, resultSpan2);
    main.appendChild(div);


}