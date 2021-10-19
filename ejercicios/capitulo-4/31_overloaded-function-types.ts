class Reservation {
    // ...
}

// Full call signature
type Reserve = {
    (from: Date, to: Date, destination: string): Reservation
}

// Implementación
const reserve: Reserve = (from, to, destination) => {
    // ...
    console.log(`Vacaciones desde ${from} a ${to} hacia ${destination}`);
    // console.log("Vacaciones desde " + from + " a " + to + " hacia " + destination);
    return new Reservation();
};

reserve(new Date(2021, 12, 25), new Date(2021, 12, 28), 'Barcelona');
