enum Color{
    Red = '#c10000',
    Blue = '#007ac1',
    Pink = 0xc10050, // Un literal hexadecimal
    White = 255 // Un literal decimal
}

console.log(Color.Red); // #c10000
console.log(Color.Blue); // #007ac1
console.log(Color.Pink); // 12648528
console.log(Color.White); // 255
console.log(Color[0]); // undefined
console.log(Color[1]); // undefined
console.log(Color[2]); // undefined
console.log(Color[3]); // undefined
console.log(Color[100]); // undefined - Aunque no exista este índice,
// TypeScript te deja escribirlo
