const immutableArray: readonly number[] = [1, 2, 3]; // readonly number[]
const copyImmutableArray: readonly number[] = immutableArray.concat(4); // readonly number[]

console.log(immutableArray); // readonly number[] ([ 1, 2, 3 ])
console.log(copyImmutableArray); // readonly number[] ([ 1, 2, 3, 4 ])
console.log(copyImmutableArray[2]); // number (3)

immutableArray[0] = 5; // Error TS2542: Index signature in type 'readonly number[]'
// only permits reading.

immutableArray.push(4); // Error TS2339: Property 'push' does not exist on type
// 'readonly number[]'.
