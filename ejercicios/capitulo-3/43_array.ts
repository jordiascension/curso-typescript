const numbers = [1, 3, 5];
// const doubleNumbers = numbers.map(function (x) {
    // return x * 2;
// });*/
const doubleNumbers = numbers.map((x) => {
    return x * 2;
});
console.log(doubleNumbers); // [ 2, 6, 10 ]

const doubleNumbersOtherMethod = numbers.map(_ => {
    return _ * 2;
});
console.log(doubleNumbersOtherMethod); // [ 2, 6, 10 ]

// No deberíamos usar arrays no homogéneos ya que conlleva más trabajo
const numbersAndStrings = [1, 'a', 3, 'b', 5, 'c'];
const doSomething = numbersAndStrings.map(_ => {
    if (typeof _ === 'number') {
        return _ * 2;
    }
    return _.toUpperCase();
});
console.log(doSomething); // [ 2, 'A', 6, 'B', 10, 'C' ]
