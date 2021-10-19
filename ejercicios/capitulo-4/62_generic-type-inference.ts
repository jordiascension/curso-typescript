/* eslint-disable @typescript-eslint/no-unused-vars */
const promiseResolved = new Promise((resolve, reject) => {
    resolve(20);
});

promiseResolved.then((res) => {
    console.log('I get called:', res * 5); // Error TS2571: Object is of type 'unknown'.
});
