const a = 'hola';
const b = 'adios';
const c = 'palabra';
const d = 'MINUSCULA';
const e = '    recorte   ';

console.log(a.charAt(1)); // o
console.log(a.concat(b)); // holaadios
console.log(a.includes('ol')); // true
console.log(a.includes('ol', 1)); // true
console.log(a.endsWith('x')); // false
console.log(a.endsWith('la', 4)); // true
console.log(a.lastIndexOf('l')); // 2
console.log(a.lastIndexOf('z')); // -1
console.log(c.lastIndexOf('a')); // 6
console.log(a.slice(2)); // la
console.log(a.slice(2, 3)); // l
console.log(a.startsWith('h')); // true
console.log(a.startsWith('o', 1)); // true
console.log(c.substring(1, 4)); // ala
console.log(a.substring(2)); // la
console.log(a.substring(2, 3)); // l
console.log(d.toLowerCase()); // minuscula
console.log(a.toUpperCase()); // HOLA
console.log(e.trim()); // recorte
