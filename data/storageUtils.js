export function findById(id, items){
    for (let item of items){
        if (item.id === id){
            return item;
        }
    }
}

export function getResults(){
    const resultString = localStorage.getItem('RESULTS') || '[]';
    const result = JSON.parse(resultString);
    return result;
}

export function capturePokemon(id){
    let results = getResults();
    let item = findById(id, results);
    console.log(item);
    console.log(results);
    console.log(id);
    item.capture++;

    setResults(results);
    // const stringResults = JSON.stringify(results);
    // localStorage.setItem('RESULTS', stringResults);
}

export function encounterPokemon(id){
    let results = getResults();
    let item = findById(id, results);

    if (item){
        item.encounter++;
    } else {
        const newItem = { id: id, capture: 0, encounter: 1 };
        results.push(newItem);
    }

    setResults(results);

    // const stringResults = JSON.stringify(results);
    // localStorage.setItem('RESULTS', stringResults);
}

export function setResults(results){
    const stringResults = JSON.stringify(results);
    localStorage.setItem('RESULTS', stringResults);
}