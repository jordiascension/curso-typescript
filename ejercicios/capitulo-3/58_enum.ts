const enum Rechargeable{
    Mobile = 'Mobile',
    Tablet = 'Tablet',
    Watch = 'Watch'
}

function recharge(f: Rechargeable) {
    console.log(f);
    return 'Recharge it';
}

console.log(recharge(Rechargeable.Mobile)); // Recharge it
console.log(recharge(Rechargeable.Tablet)); // Recharge it
console.log(recharge(Rechargeable.Watch)); // Recharge it
console.log(recharge(100)); // Error TS2345: Argument of type '100' is not assignable
// to parameter of type 'Rechargeable'.
console.log(recharge('TV')); // Error TS2345: Argument of type 'TV' is not assignable
// to parameter of type 'Rechargeable'.
