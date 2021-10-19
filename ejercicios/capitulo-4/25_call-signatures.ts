function area(radius: number): number | null {
    if (radius < 0) {
        return null;
    }
    return Math.PI * (radius ** 2);
}

const r: number = 3;
const a = area(r);
if (a !== null) {
    console.info('Result: ', a); // Result:  28.274333882308138
}
