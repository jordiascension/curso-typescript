let a: {b: number};

a = {}; // Error TS2741: Property 'b' is missing in type '{}'
// but required in type '{b: number}'.

a = {
    b: 1,
    c: 2 // Error TS2322: Type '{b: number; c: number}' is not assignable
}; // to type '{b: number}'. Object literal may only specify known
 // properties, and 'c' does not exist in type '{b: number}'.

console.log(a);
