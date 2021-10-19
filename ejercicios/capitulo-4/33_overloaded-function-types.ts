/* eslint-disable @typescript-eslint/no-unused-vars */
// Full call signature
type Reserve = { // 1
    (from: Date, to: Date, destination: string): Reservation // IDA y VUELTA
    (from: Date, destination: string): Reservation // IDA
}

// Implementación
const reserve: Reserve = (
    from: Date,
    toOrDestination: Date | string,
    destination?: string
    ) => { // 2
    // ...
};

console.log(reserve);
