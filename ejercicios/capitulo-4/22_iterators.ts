const numbers = {
    * [Symbol.iterator]() {
        for (let n = 1; n <= 10; n++) {
            yield n;
        }
    }
};

// Desplegar (spread) un iterador
const allNumbers = [...numbers];
console.log(allNumbers); // number[]
