function map<T, U>(array: T[], f: (item: T) => U): U[] {
    const result: U[] = []; // let result: Array<U> = [];
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        result.push(f(item));
    }
    return result;
}

// OK, porque 'boolean' es asignable a "boolean | string"
const arrayResult = map<string, boolean | string>(
    ['a', 'b', 'c'],
    _ => _ === 'a'
);
console.log(arrayResult);
