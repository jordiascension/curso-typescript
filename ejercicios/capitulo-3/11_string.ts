const a = 'a';
const b = 'b';
// const c = new String('a');

console.log(a > b); // false
console.log(a >= b); // false
console.log(a < b); // true
console.log(a <= b); // true
console.log();
// console.log(a == b); // false
// console.log(a != b); // true
console.log(a === b); // false
console.log(a !== b); // true
console.log();
// console.log(a > c); // false
// console.log(a >= c); // true
// console.log(a < c); // false
// console.log(a <= c); // true
console.log();
// console.log(a == c); // true (La variable (a) es un string primitivo y la (b) es un objeto,
                        // pero '==' y '!=' convierten al valor implícitamente antes de compararlos)
// console.log(a != c); // false
// console.log(a === c); // false (La variable (a) es un string primitivo y la (b) es un objeto,
// y '===' y '!==' comparan si son de mismos tipos, sin convertirlos implicitamente)
// console.log(a !== c); // true
