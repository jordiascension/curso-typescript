const numbers = {
    * [Symbol.iterator]() {
        for (let n = 1; n <= 10; n++) {
            yield n;
        }
    }
};

// Iterar sobre un iterador con 'for-of'
// eslint-disable-next-line no-restricted-syntax
for (const a of numbers) {
    console.log(a);
}
