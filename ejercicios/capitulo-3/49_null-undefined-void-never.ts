function a(x: number) {
    if (x < 5) {
        return x;
    }
    return null;
}
function b() {
    return undefined;
}
function c() {
    const a = 5 + 2;
    const b = a * a;
    console.log(b);
}
function d() {
    throw TypeError('I always error');
}
function e() {
    while (true) {
        // ...
    }
}

a(6);
b();
c();
d();
e();
