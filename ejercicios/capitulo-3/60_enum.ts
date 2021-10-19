// Error, solo los valores de la primera declaración del 'enum', serán inferidos por TypeScript
enum Currency{
    Dollar, // 0
    Euro, // 1
    Yen
}

// enum Currency {
// Yen
// }

console.log(Currency.Dollar); // 0
console.log(Currency.Euro); // 1
console.log(Currency.Yen); // Error TS2432: In an enum with multiple declarations,
// only one declaration can omit an initializer for its
// first enum element.
