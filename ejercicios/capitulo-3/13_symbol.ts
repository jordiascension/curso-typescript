const a = Symbol('a'); // symbol
const b: symbol = Symbol('b'); // symbol
const c = a === b; // boolean (false)
// const d = a + 'x'; // Error TS2469: The '+' operator cannot be applied to type 'symbol'.

console.log(a);
console.log(b);
console.log(c);
// console.log(d);
