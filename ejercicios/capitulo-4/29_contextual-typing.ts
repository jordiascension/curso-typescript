function times(
    f: (index: number) => void,
    n: number
) {
    for (let i = 0; i < n; i++) {
        f(i);
    }
}

function f(n) { // Error TS7006: Parameter 'n' implicitly has an 'any' type.
    console.log(n);
}

times(f, 4);
