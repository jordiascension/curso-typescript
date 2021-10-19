type Cat = {name: string, purrs: boolean}
type Dog = {name: string, barks: boolean, wags: boolean}
type CatOrDogOrBoth = Cat | Dog
type CatAndDog = Cat & Dog

const b: CatAndDog = {
    name: 'Domino',
    barks: true,
    purrs: true,
    wags: true
};

console.log(b); // { name: 'Domino', barks: true, purrs: true, wags: true }
