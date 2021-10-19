type Filter = {
    (array: number[], f: (item: number) => boolean): number[]
}

const filter: Filter = (array, f) => {
        const result = [];
    for (let i = 0; i < array.length; i++) {
        const item = array[i];
        if (f(item)) {
            result.push(item);
        }
    }
    return result;
};

const arrayNumbers = [1, 2, 3];
console.log(filter(arrayNumbers, _ => _ < 3)); // number[]  ([ 1, 2 ])
