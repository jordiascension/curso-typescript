function sumVariadic(): number {
    return Array
        // eslint-disable-next-line prefer-rest-params
        .from(arguments)
        .reduce((total, n) => total + n, 0);
}

console.log(sumVariadic(1, 2, 3)); // Error TS2554: Expected 0 arguments, but got 3.
