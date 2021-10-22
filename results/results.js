import { pokemonArr } from '../data/pokemon.js';
import { getResults, findById } from '../data/storageUtils.js';

const results = getResults();

const main = document.getElementById('main');

for (let item of results){
    const pokemon = findById(item.id, pokemonArr);
    // console.log(pokemon);
    // console.log(item);
    // console.log(pokemonArr);

    const div = document.createElement('div');
    const img = document.createElement('img');
    img.src = pokemon.url_image;
    const header = document.createElement('h2');
    header.textContent = pokemon.pokemon;
    const resultSpan1 = document.createElement('span');
    resultSpan1.textContent = `encounter: ${item.encounter} `;
    const resultSpan2 = document.createElement('span');
    resultSpan2.textContent = `capture: ${item.capture}`;

    div.append(header, img, resultSpan1, resultSpan2);
    main.appendChild(div);
}

const names = results.map((item)=>{
    const pokemonId = findById(item.id, pokemonArr);
    // console.log(pokemonId);
    return pokemonId.pokemon;
});

const capture = results.map(item=>item.capture);
const encounter = results.map(item=> item.encounter);
// console.log(encounter);

var ctx = document.getElementById('myChart').getContext('2d');
// eslint-disable-next-line no-undef
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: names,
        datasets: [{
            
            label: 'number of times captured',
            data: capture,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1

            
        }, 
        {
            label: 'number of times encounter',
            data: encounter,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1 }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});