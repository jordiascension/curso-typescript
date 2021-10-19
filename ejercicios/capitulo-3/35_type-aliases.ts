type Cat = {name: string, purrs: boolean}
type Dog = {name: string, barks: boolean, wags: boolean}
type CatOrDogOrBoth = Cat | Dog
type CatAndDog = Cat & Dog

// Cat
let a: CatOrDogOrBoth = {
    name: 'Salem',
    purrs: true
};
console.log(a); // { name: 'Salem', purrs: true }

// Dog
a = {
    name: 'Tobby',
    barks: true,
    wags: true
};
console.log(a); // { name: 'Tobby', barks: true, wags: true }

// Both
a = {
    name: 'Mixer',
    barks: true,
    purrs: true,
    wags: true
};
console.log(a); // { name: 'Mixer', barks: true, purrs: true, wags: true }
