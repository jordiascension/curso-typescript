/* eslint-disable @typescript-eslint/no-unused-vars */
type MyEvent<T> = {
    target: T
    type: string
}

function triggerEvent<T>(event: MyEvent<T>): void {
    // ...
}

triggerEvent({ // T es: Element | null
    target: document.querySelector('#myButton'),
    type: 'mouseover'
});
