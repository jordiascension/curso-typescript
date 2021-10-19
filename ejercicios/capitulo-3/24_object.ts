let i : number;
const j = i * 5; // Error TS2454: Variable 'i' is used
 // before being assigned.

let k;
const l = k * 5; // Error TS2532: Object is possibly 'undefined'.

console.log(j);
console.log(l);
