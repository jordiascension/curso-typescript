const a = true; // Es de tipo boolean
const b = false; // Es de tipo boolean
const c = true; // true
const d: boolean = true; // Es de tipo boolean
const e: true = true; // true
const f: true = false; // Error TS2322: Type 'false' is not assignable

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
