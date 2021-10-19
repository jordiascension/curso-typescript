/* eslint-disable @typescript-eslint/no-unused-vars */
type Filter = { // 1
    <T>(array: T[], f: (item: T) => boolean): T[]
}
// const filter: Filter = // ...

// type Filter<T> = { // 2
    // (array: T[], f: (item: T) => boolean): T[]
// }
// const filter: Filter<number> = // ...

// type Filter = <T>(array: T[], f: (item: T) => boolean) => T[] // 3
// const filter: Filter = //...

// type Filter<T> = (array: T[], f: (item: T) => boolean) => T[] // 4
// const filter: Filter<string> = //...

function filter<T>(array: T[], f: (item: T) => boolean): T[] { // 5
    // ...
}
