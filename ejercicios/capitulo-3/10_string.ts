const a = 'hola'; // string
const b = 'john'; // string
const c = '!'; // '!'
const d = `${a} ${b}${c}`; // string (hola john!) - const d = a + ' ' + b + c;
const e: string = 'adios'; // string
const f: 'john' = 'john'; // 'john'
const g: 'john' = 'paul'; // Error TS2322: Type "paul" is not assignable to type "john".

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
console.log(g);
