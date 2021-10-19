const enum Language{
    English,
    Spanish,
    French
}

// Acceso con una 'enum key' válida
const a = Language.English;
console.log(a); // 0

// Acceso con una 'enum key' inválida
const b = Language.German;
console.log(b); // Error TS2339: Property 'German' does not exist
// on type 'typeof Language'.

// Acceso con un 'enum value' válido
const c = Language[0];
console.log(c); // Error TS2476: A const enum member can only be
// accessed using a string literal.

// Acceso con un 'enum value' inválido
const d = Language[100];
console.log(d); // Error TS2476: A const enum member can only be
// accessed using a string literal.
