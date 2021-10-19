const user: {
    readonly firstName: string
} = {
    firstName: 'mary'
};

console.log(user.firstName); // string (mary)

user.firstName = 'anne'; // Error TS2540: Cannot assign to 'firstName' because
// it is a read-only property.
