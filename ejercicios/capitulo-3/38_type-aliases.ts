type Returns = string | null

function trueOrNull(isTrue: boolean) {
    if (isTrue) {
        const a: Returns = 'hi';
        return a;
    }
    const b: Returns = null;
    return b;
}

console.log(trueOrNull(true)); // string (hi)
console.log(trueOrNull(false)); // null
