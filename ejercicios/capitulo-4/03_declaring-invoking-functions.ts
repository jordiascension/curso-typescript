function add(a: number, b: number) {
    return a + b;
}

function greet(name: string) {
    return `Hello ${name}`;
    // return 'Hello ' + name;
}

console.log(add(5, 3)); // 8
console.log(greet('John')); // Hello John
console.log(add(1)); // Error TS2554: Expected 2 arguments, but got 1.
console.log(greet(5)); // Error TS2345: Argument of type 'number' is not
// assignable to parameter of type 'string'.
