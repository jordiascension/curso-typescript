enum Language{
    English = 100,
    Spanish = 200 + 400, // 600
    French // 601
}

console.log(Language.English); // 100
console.log(Language.Spanish); // 600
console.log(Language.French); // 601
