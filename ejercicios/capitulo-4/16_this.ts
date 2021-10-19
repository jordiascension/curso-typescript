function fancyDate(this: Date) {
    return `${this.getDate()}/${this.getMonth()}/${this.getFullYear()}`;
}

console.log(fancyDate.call(new Date())); // 6/8/2021
