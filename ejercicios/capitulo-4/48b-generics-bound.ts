/* eslint-disable @typescript-eslint/no-unused-vars */
type Filter<T> = {
    (array: T[], f: (item: T) => boolean): T[]
}

const filter: Filter = (array, f) => { // Error TS2314: Generic type 'Filter'
    // ...                                   //requires 1 type argument(s)
};

type OtherFilter = Filter // Error TS2314: Generic type 'Filter'
// requires 1 type argument(s)

const filter2: Filter<number> = (array, f) => {
    // ...
};

type StringFilter = Filter<string>
const stringFilter: StringFilter = (array, f) => {
    // ...
};
