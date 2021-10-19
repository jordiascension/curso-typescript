// Incorrecto
type Reserve = {
    (from: Date, to: Date, destination: string): Reservation
    (from: Date, destination: string): Reservation
    (from: Date, toOrDestination: Date | string, destination?: string): Reservation
}
