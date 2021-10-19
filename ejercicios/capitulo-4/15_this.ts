const x = {
    a() {
        return this;
    }
};

const { a } = x;
// const a = x.a;

console.log(a()); // undefined
// ahora,'this' es "undefined" en el cuerpo de "a()"
