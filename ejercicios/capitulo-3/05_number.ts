const a = 1 + 2; // number
const b = a + 3; // number
const c = { // object with 2 properties ‘witdth’ and ‘height’
    width: a, // number
    height: b // number
};
const d = c.width * 4; // number
const e: number = 5; // number

console.log(a); // 3
console.log(b); // 6
console.log(c); // { width: 3, height: 6 }
console.log(d); // 12
console.log(e); // 5
