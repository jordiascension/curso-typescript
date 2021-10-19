function stringOrNumber(a: string, b: number) {
    console.log(a);
    console.log(b);
    const c = a || b;
    console.log(`It will return: ${c}`);
    return c;
}
stringOrNumber('hi', 2); // string (hi) -> a is true, so returns a (without checking b, OR)
stringOrNumber('', 2); // number (2)  -> a is false, so returns b

function stringAndNumber(a: string, b: number) {
    console.log(a);
    console.log(b);
    const c = a && b;
    console.log(`It will return: ${c}`);
    return c;
}
stringAndNumber('hi', 2); // number (2) -> a is true, b is true, so return b
stringAndNumber('', 2); // string ()  -> a is false, so returns a (without checking b, AND)
