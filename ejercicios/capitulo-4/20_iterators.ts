const numbers = {
    * [Symbol.iterator]() {
        for (let n = 1; n <= 10; n++) {
            yield n;
        }
    }
};

console.log(numbers); // { [Symbol(Symbol.iterator)]: [GeneratorFunction: [Symbol.iterator]] }
