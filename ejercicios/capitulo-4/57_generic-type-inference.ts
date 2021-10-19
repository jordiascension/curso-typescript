function map<T, U>(array: T[], f: (item: T) => U): U[] {
    const result: U[] = []; // let result: Array<U> = [];
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        result.push(f(item));
    }
    return result;
}

const arrayResult = map<string, boolean>(
    ['a', 'b', 'c'], // T[] - El tipo T es string
    _ => _ === 'a' // Función que devuelve U   - El tipo U es boolean
);
console.log(arrayResult); // [ true, false, false ]
