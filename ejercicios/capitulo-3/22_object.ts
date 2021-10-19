let c: {
    firstName: string
    lastName: string
} = {
    firstName: 'john',
    lastName: 'doe'
};

console.log(c); // { firstName: 'john', lastName: 'doe' } (object literal)

class Person {
    constructor(
        public firstName: string, // 'public' is shorthand for:
        public lastName: string // this.firstName = firstName
    // eslint-disable-next-line no-empty-function
    ) { }
}

c = new Person('matt', 'smith');

console.log(c); // Person { firstName: 'matt', lastName: 'smith' } (class)
