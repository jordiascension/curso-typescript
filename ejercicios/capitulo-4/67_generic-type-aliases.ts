type MyEvent<T> = {
    target: T
    type: string
}

type TimeEvent<T> = {
    event: MyEvent<T>
    from: Date
    to: Date
}
