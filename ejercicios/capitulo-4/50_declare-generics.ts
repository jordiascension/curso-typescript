// eslint-disable-next-line @typescript-eslint/no-unused-vars
function map(array: unknown[], f: (item: unknown) => unknown): unknown[] {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result[i] = f(array[i]);
    }
    return result;
}
