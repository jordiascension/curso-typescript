const a = [1, 2, 3]; // number[]
const b = ['a', 'b']; // string[]
const c: string[] = ['a']; // string[]
const d = [1, 'a']; // (string | number)[]
const e = [2, 'b']; // (string | number)[]

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

const f = ['red'];
f.push('blue');
console.log(f); // string[] ([ 'red', 'blue' ])
f.push(true); // Error TS2345: Argument of type 'true' is not
                        // assignable to parameter of type 'string'.
const g = [];
g.push(1);
console.log(g); // number[] ([ 1 ])
g.push('red');
console.log(g); // (string | number)[] ([ 1, 'red' ])

const h: number[] = [];
h.push(1);
console.log(h); // number[] ([ 1 ])
h.push('red'); // Error TS2345: Argument of type '"red"' is not
// assignable to parameter of type 'number'.
