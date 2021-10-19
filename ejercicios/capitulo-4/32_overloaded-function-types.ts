// Full call signature
type Reserve = {
    (from: Date, to: Date, destination: string): Reservation // IDA y VUELTA
    (from: Date, destination: string): Reservation // IDA
}
// Error TS2322: Type '(from: Date, to: Date, destination: string) => Reservation'
// is not assignable to type 'Reserve'.
