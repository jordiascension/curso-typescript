function map<T, U>(array: T[], f: (item: T) => U): U[] {
    const result: U[] = []; // let result: Array<U> = [];
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        result.push(f(item));
    }
    return result;
}

const arrayResult = map<string, number>( // error TS2322: Type 'boolean' is not
    ['a', 'b', 'c'], // assignable to type 'number'.
    _ => _ === 'a'
);
console.log(arrayResult);
