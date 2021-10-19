function buildArray() {
    const a = []; // any[]
    a.push(1); // number[]
    a.push('hi'); // (string | number)[]
    return a;
}

const myArray = buildArray(); // (string | number)[]
myArray.push(true); // Error TS2345: Argument of type 'boolean' is not
// assignable to parameter of type 'string | number'.
