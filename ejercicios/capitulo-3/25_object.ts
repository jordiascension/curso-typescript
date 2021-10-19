const a: {
    b: number, // Caso 1
    c?: string, // Caso 2
    [key: number]: boolean // Caso 3
};

console.log(a);
