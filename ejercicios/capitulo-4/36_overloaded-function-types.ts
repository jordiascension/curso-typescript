const reserve: Reserve = (
    from: Date,
    toOrDestination: Date | string,
    destination?: string
    ) => {
    if (toOrDestination instanceof Date && destination !== undefined) {
        // Reserva de IDA
    } else if (typeof toOrDestination === 'string') {
        // Reserva de IDA y VUELTA
    }
};

console.log(reserve);
