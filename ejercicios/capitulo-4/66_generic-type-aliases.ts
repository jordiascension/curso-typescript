/* eslint-disable @typescript-eslint/no-unused-vars */
type MyEvent<T> = {
    target: T
    type: string
}

const myEvent: MyEvent<HTMLButtonElement | null> = {
    target: document.querySelector('#myButton'),
    type: 'click'
};
