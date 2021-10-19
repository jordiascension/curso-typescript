const a: unknown = 10; // Es de tipo unknown
const b = a === 150; // Es de tipo boolean
const c = a + 15; // Error TS2571: Object is of type 'unknown'
let d;
if (typeof a === 'number') {
    d = a + 15; // number
}

console.log(a);
console.log(b);
console.log(c);
console.log(d);
