function* createFibonacciGnerator() { // 1
    let a = 0;
    let b = 1;
    while (true) { // 2
        yield a; // 3
        [a, b] = [b, a + b]; // 4
    }
}

const fibonacciGenerator = createFibonacciGnerator(); // IterableIterator<number>
console.log(fibonacciGenerator); // Object [Generator] {}
console.log(fibonacciGenerator.next()); // { value: 0, done: false }
console.log(fibonacciGenerator.next()); // { value: 1, done: false }
console.log(fibonacciGenerator.next()); // { value: 1, done: false }
console.log(fibonacciGenerator.next()); // { value: 2, done: false }
console.log(fibonacciGenerator.next()); // { value: 3, done: false }
console.log(fibonacciGenerator.next()); // { value: 5, done: false }
