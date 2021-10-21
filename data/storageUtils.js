export function findById(id, items){
    for (let item of items){
        if (item.id === id){
            return item;
        }
    }
}

export function getResults(){
    const resultString = localStorage.getItem('RESULT') || '[]';
    const result = JSON.parse(resultString);
    return result;
}

export function capturePokemon(id){
    let results = getResults();
    let item = findById(id, results);
    console.log(item);
    console.log(results);
    item.capture++;

    const stringResults = JSON.stringify(results);
    localStorage.setItem('RESULTS', stringResults);
}

export function encounterPokemon(id){
    let results = getResults();
    let item = findById(id, results);

    if (item){
        item.encounter++;
    } else {
        const newItem = { id: id, capture: 1, encounter: 1 };
        results.push(newItem);
    }

    const stringResults = JSON.stringify(results);
    localStorage.setItem('RESULTS', stringResults);



}