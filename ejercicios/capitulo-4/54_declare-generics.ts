/* eslint-disable eqeqeq */
interface Array<T> {
    filter(
        callbackfn: (value: T, index: number, array: T[]) => any,
        thisArg?: any
    ) : T[]

    map<U>(
        callbackfn: (value: T, index: number, array: T[]) => U,
        thisArg?: any
    ) : U[]
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Array<number>

// Solo números pares
const arrayResult = array.filter(evenNumber => evenNumber % 2 == 0); // [ 2, 4, 6, 8, 10 ]
console.log(arrayResult);

// Solo números impares
const arrayResult2 = array.filter(oddNumber => oddNumber % 2 != 0); // [ 1, 3, 5, 7, 9 ]
console.log(arrayResult2);
