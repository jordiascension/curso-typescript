enum Color{
    Red = '#c10000',
    Blue = '#007ac1',
    Pink = 0xc10050, // Un literal hexadecimal
    White = 255 // Un literal decimal
}

console.log(Color.Green); // Error TS2339: Property 'Green' does not exist
// on type 'typeof Color'.
console.log(Color[100]); // undefined - Aunque no exista este índice,
// TypeScript te deja escribirlo
