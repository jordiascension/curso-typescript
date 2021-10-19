const a = 10; // number
const b = Infinity * 0.10; // number
const c = 15; // 15
const d = a < b; // boolean
const e: number = 100; // number
const f: 25.50 = 25.50; // 25.50
const g: 25.50 = 20; // Error TS2322: Type '20' is no assignable to type '25.50'

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
