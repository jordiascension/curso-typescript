function map<T, U>(array: T[], f: (item: T) => U): U[] {
    const result: U[] = []; // let result: Array<U> = [];
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        result.push(f(item));
    }
    return result;
}

const arrayResult = map<string>( // error TS2558: Expected 2 type arguments, but got 1.
    ['a', 'b', 'c'],
    _ => _ === 'a'
);
console.log(arrayResult);
