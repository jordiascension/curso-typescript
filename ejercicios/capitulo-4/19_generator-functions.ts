function* createNumbers(): IterableIterator<number> {
    let n = 0;
    while (1) {
        yield n++;
    }
}

const numbers = createNumbers(); // IterableIterator<number>
console.log(numbers); // Object [Generator] {}
console.log(numbers.next()); // { value: 0, done: false }
console.log(numbers.next()); // { value: 1, done: false }
console.log(numbers.next()); // { value: 2, done: false }
console.log(numbers.next()); // { value: 3, done: false }
console.log(numbers.next()); // { value: 4, done: false }
console.log(numbers.next()); // { value: 5, done: false }
