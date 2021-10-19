type Filter = {
    <T>(array: T[], f: (item: T) => boolean): T[]
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

const arrayNumbers = [1, 2, 3];
// T está ligado a 'number'
console.log(filter(arrayNumbers, _ => _ < 3)); // number[] ([1, 2])

const arrayStrings = ['hola', 'adios', 'hasta luego'];
// T está ligado a 'string'
console.log(filter(arrayStrings, _ => _.includes('h'))); // string[](['hola', 'hasta luego'])

const arrayObjects = [
    { firstName: 'John' },
    { firstName: 'Mary' },
    { firstName: 'Elisabeth' }
];
// T está ligado a '{firstName: string}'
console.log(filter(arrayObjects, _ => _.firstName.startsWith('M'))); // [ { firstName: 'Mary' } ]
