/* eslint-disable @typescript-eslint/no-unused-vars */
function call<T extends unknown[], R>( // 1
  f: (...args: T) => R, // 2
  ...args: T // 3
): R { // 4
  return f(...args);
}
