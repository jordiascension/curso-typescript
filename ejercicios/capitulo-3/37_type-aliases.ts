function trueOrNull(isTrue: boolean) {
    if (isTrue) {
        return 'hi';
    }
    return null;
}

console.log(trueOrNull(true)); // string (hi)
console.log(trueOrNull(false)); // null
