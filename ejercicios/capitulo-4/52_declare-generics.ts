/* eslint-disable @typescript-eslint/no-unused-vars */
function map<T, U>(array: T[], f: (item: T) => U): U[] {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result[i] = f(array[i]);
    }
    return result;
}

const array1 = [1, 2, 3];
const valueNumber = 4;
const arrayResult1 = map(array1, array1 => valueNumber);
console.log(arrayResult1); // [ 4, 4, 4 ]

const array2 = [1, 2, 3];
const valueArrayNumber = [4, 5, 6];
const arrayResult2 = map(array2, array2 => valueArrayNumber);
console.log(arrayResult2); // [ [ 4, 5, 6 ], [ 4, 5, 6 ], [ 4, 5, 6 ] ]

const array3 = [1, 2, 3];
const valueString = 'a';
const arrayResult3 = map(array3, array3 => valueString);
console.log(arrayResult3); // [ 'a', 'a', 'a' ]
