type Color = 'red'

const randomValue = Math.random(); // Math.random() da un valor aleatorio
// entre: 0 (incluido) y 1 (excluido)
console.log(randomValue);

const isNumberUnderSpecificValue = randomValue < 0.5;
console.log(isNumberUnderSpecificValue);

if (isNumberUnderSpecificValue) { // true
    type Color = 'blue' // Esto oculta el "Color" declarado arriba
    const b: Color = 'blue';
    console.log(b);
} else { // false
    const c: Color = 'red';
    console.log(c);
}
