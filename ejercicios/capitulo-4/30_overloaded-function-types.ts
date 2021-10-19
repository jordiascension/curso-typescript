// Shorthand call signature
type Log = (message: string, userId?: string) => void

// Full call signature
type Log2 = {
    (message: string, userId?: string): void
}
