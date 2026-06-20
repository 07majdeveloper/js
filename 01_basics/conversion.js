let age1 = "25";
console.log(age1);
console.log(typeof age1);
// ye string hai 
let convertedAge = Number(age1);
console.log(convertedAge);
console.log(typeof convertedAge);
// after conversion ye number hogaya 


let value = "Hello";
// ye string hai lekin isko number mein convert karre hai toh 
let result = Number(value);
console.log(result);
console.log(typeof result);
// output NaN aayega lekin number type mein kyuki number nai hai iske pass


let age = 25;
// ye number type hai data ka 
let strAge = String(age);
// isko string mein convert kiya hai
console.log(strAge);
console.log(typeof strAge);
// output "25" aayega string mein change hojayega

let login = true;
// Boolean mein true ki value 1 hoti hai 
console.log(login)
console.log(typeof login)
let loginNumber = Number(login)
// number mein convert hue baad true = 1 false =0
console.log(loginNumber)
console.log(typeof loginNumber)
// output for true 1 and false 0
