let a = 1 + 2;
console.log(a); // 3

a = 10;
console.log(a); // 10

a += 6;
console.log(a); // 16 (Es lo mismo a poner: a = a + 6)

console.log(++a); // 17
console.log(a); // 17

console.log(a++); // 17
console.log(a); // 18

a %= 3; // a = a % 3
console.log(a); // 0 -> Resto de la división de 18 / 3

a %= 0; // a = a % 0
console.log(a); // NaN (Not a Number) -> Resto de la división de 0 / 0
