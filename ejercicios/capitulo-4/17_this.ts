function fancyDate(this: Date) {
    return `${this.getDate()}/${this.getMonth()}/${this.getFullYear()}`;
}

console.log(fancyDate()); // error TS2684: The 'this' context of type 'void'
// is not assignable to method's 'this' of type 'Date'.
