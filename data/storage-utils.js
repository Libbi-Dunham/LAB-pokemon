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


