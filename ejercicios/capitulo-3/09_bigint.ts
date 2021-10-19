const a = 1000n; // bigint
const b = 2000n; // 2000n
const c = a + b; // bigint
const d = a < 1500; // boolean
// let e = 50.50n; // Error TS1353: A bigint must be an integer.
const f: bigint = 3000n; // bigint
const g: 4000n = 4000n; // 4000n
const h: bigint = 100; // Error TS2322: Type '100' in not assignable to type 'bigint'.

console.log(a);
console.log(b);
console.log(c);
console.log(d);
// console.log(e);
console.log(f);
console.log(g);
console.log(h);
