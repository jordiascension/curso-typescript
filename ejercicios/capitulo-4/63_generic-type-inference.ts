/* eslint-disable @typescript-eslint/no-unused-vars */
const promiseResolved = new Promise<number>((resolve, reject) => {
    resolve(20);
});

promiseResolved.then((res) => {
    console.log('I get called:', res * 5); // I get called: 100.
});
