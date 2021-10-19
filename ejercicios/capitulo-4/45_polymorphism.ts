type Filter = {
    (array: string[], f: (item: string) => boolean): string[]
}

const filter: Filter = (array, f) => {
        const result = [];
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        if (f(item)) {
            result.push(item);
        }
    }
    return result;
};

const arrayStrings = ['hola', 'adios', 'hasta luego'];
console.log(filter(arrayStrings, _ => _.includes('h'))); // string[](['hola', 'hasta luego'])
