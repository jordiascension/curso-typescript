/* eslint-disable @typescript-eslint/no-unused-vars */
const promiseResolved = new Promise((resolve, reject) => {
    resolve(20);
});

promiseResolved.then((res) => {
    console.log('I get called:', res === 20); // I get called: true
});
promiseResolved.catch((err) => {
    // This is never called
});

const promiseRejected = new Promise((resolve, reject) => {
    reject(new Error("Something awful happened"));
});
promiseRejected.then((res) => {
    // This is never called
});
promiseRejected.catch((err) => {
    console.log('I get called:', err.message); // I get called: 'Something awful happened'
});
