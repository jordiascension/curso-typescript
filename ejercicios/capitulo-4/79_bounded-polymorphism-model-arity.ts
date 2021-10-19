/* eslint-disable @typescript-eslint/no-unused-vars */
function call<T extends unknown[], R>(f: (...args: T) => R, ...args: T): R {
  return f(...args);
}

function fill(length: number, value: string): string[] {
  return Array.from({ length }, () => value);
}

const array = call(fill, 10); // Error TS2554: Expected 3 arguments, but got 2.

const array2 = call(fill, 10, "a", "b"); // Error TS2554: Expected 3 arguments, but got 4.
