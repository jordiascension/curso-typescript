let a: {
    b: number, // Caso 1
    c?: string, // Caso 2
    [key: number]: boolean // Caso 3
};

a = { b: 1 };
console.log(a); // { b: 1 }
a = { b: 1, c: undefined };
console.log(a); // { b: 1, c: undefined }
a = { b: 1, c: 'd' };
console.log(a); // { b: 1, c: 'd' }
a = { b: 1, 10: true };
console.log(a); // { '10': true, b: 1 }
a = { b: 1, 10: true, 20: false };
console.log(a); // { '10': true, '20': false, b: 1 }
