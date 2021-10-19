const a = 10; // Es de tipo number
const b = a === 150; // Es de tipo boolean
const c = a + 15; // Es de tipo number
let d;
if (typeof a === 'number') {
    d = a + 15; // number
}

console.log(a); // 10
console.log(b); // false
console.log(c); // 25
console.log(d); // 25
