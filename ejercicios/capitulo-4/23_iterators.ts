const numbers = {
    * [Symbol.iterator]() {
        for (let n = 1; n <= 10; n++) {
            yield n;
        }
    }
};

// Desestructurar un iterador
const [one, two, ...rest] = numbers;
console.log([one, two, ...rest]); // number[] ([1, 2, 3, 4,  5,  6, 7, 8, 9, 10])
console.log(one); // number (1)
console.log(two); // number (2)
console.log(rest); // number ([3, 4,  5,  6, 7, 8, 9, 10])
