const enum Rechargeable{
    Mobile,
    Tablet,
    Watch
}

function recharge(f: Rechargeable) {
    console.log(f);
    return 'Recharge it';
}

console.log(recharge(Rechargeable.Mobile)); // Recharge it
console.log(recharge(Rechargeable.Tablet)); // Recharge it
console.log(recharge(Rechargeable.Watch)); // Recharge it
console.log(recharge(100)); // Recharge it
