type Age = number

type Person = {
    name: string
    age: Age
}

// let agePerson: Age = 30
const agePerson = 30;

const person: Person = {
    name: 'John Doe',
    age: agePerson
};

console.log(person); // { name: 'John Doe', age: 30 }
