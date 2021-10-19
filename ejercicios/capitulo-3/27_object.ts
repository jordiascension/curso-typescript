let a: {
    b: number // Caso 1
    c?: string // Caso 2
    [key: number]: boolean // Caso 3
};

a = { 10: true }; // Error TS2741: Property 'b' is missing in type
// '{10: true}'.
a = { b: 1, 30: 'blue' }; // Error TS2741: Type 'string' is not assignable
// to type 'boolean'.

console.log(a);
