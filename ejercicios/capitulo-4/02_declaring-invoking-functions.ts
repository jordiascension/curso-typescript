// Named function
function greet(name: string) {
    return `Hello ${name}`;
    // return 'Hello ' + name;
}

// Function expression
const greet2 = function (name: string) {
    return `Hello ${name}`;
    // return 'Hello ' + name;
};

// Arrow function expression
const greet3 = (name: string) => {
    return `Hello ${name}`;
    // return 'Hello ' + name;
};

// Shorthand arrow function expression
const greet4 = (name: string) =>
    `Hello ${name}`;
    // 'Hello ' + name;

// Function constructor
// const greet5 = new Function('name', 'return "Hello " + name');

console.log(greet("Anne")); // Hello Anne
console.log(greet2("Anne")); // Hello Anne
console.log(greet3("Anne")); // Hello Anne
console.log(greet4("Anne")); // Hello Anne
// console.log(greet5("Anne")); // Hello Anne
