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
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // Array<number>
// booleanos (true = pares, false = impares)
const arrayResult = array.map(evenNumber => evenNumber % 2 == 0); // [
                                                                //  false, true,  false,
                                                                //  true,  false, true,
                                                                //  false, true,  false,
                                                                // ]
console.log(arrayResult); // Array<boolean>
// booleanos (true = impares, false = pares)
const arrayResult2 = array.map(oddNumber => oddNumber % 2 != 0); // [
                                                                //  true,  false, true,
                                                                //  false, true,  false,
                                                                //  true,  false, true,
                                                                // ]
console.log(arrayResult2); // Array<boolean>
const raices = array.map(Math.sqrt);
console.log(raices); // Array<number>
