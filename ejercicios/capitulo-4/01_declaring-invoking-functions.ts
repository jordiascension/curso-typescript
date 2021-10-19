function add(a: number, b: number) {
    return a + b;
}

function addExplicitReturnType(a: number, b: number): number {
    return a + b;
}

console.log(add(10, 5)); // 15
console.log(addExplicitReturnType(10, 5)); // 15
