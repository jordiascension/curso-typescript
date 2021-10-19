function add(a: number, b: number): number {
    return a + b;
}

console.log(add(5, 10)); // 15
console.log();
console.log(add.apply(null, [5, 10])); // 15
console.log(add.bind(null, 5, 10)()); // 15
console.log(add.call(null, 5, 10)); // 15
