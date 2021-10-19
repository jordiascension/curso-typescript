type CreateElement = {
    (tag: 'a'): HTMLAnchorElement // 1
    (tag: 'canvas'): HTMLCanvasElement
    (tag: 'table'): HTMLTableElement
    (tag: string): HTMLElement // 2
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const createElement: CreateElement = (tag: string): HTMLElement => { // 3
    // ...
};
