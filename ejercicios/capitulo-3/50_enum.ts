enum CupSize{
    Small, // 0
    Medium, // 1
    Large // 2
}

// Acceso al 'enum value' por 'key'
console.log(CupSize.Small); // 0
console.log(CupSize.Medium); // 1
console.log(CupSize.Large); // 2
// console.log(CupSize['Small']); // 0
// console.log(CupSize['Medium']); // 1
// console.log(CupSize['Large']); // 2

enum Currency{
    Dollar = 0,
    Euro = 1,
    Yen = 2
}

console.log(Currency.Dollar); // 0
console.log(Currency.Euro); // 1
console.log(Currency.Yen); // 2
