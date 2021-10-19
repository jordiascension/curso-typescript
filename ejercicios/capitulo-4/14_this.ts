const x = {
    a() {
        return this;
    }
};

console.log(x.a()); // { a: [Function: a] }
// 'this' es el objeto "x" en el cuerpo de "a()"
