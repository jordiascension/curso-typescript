type Returns = string | null

function trueOrNull(isTrue: boolean) {
    let c: Returns;
    if (isTrue) {
        c = 'hi';
        return c;
    }
    c = null;
    return c;
}

console.log(trueOrNull(true)); // string (hi)
console.log(trueOrNull(false)); // null
