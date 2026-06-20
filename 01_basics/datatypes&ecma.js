// primitive datatype hai :-Primitive values single value store karti hain aur immutable (change nahi hoti) hoti hain.
let name = "Mohammed";
console.log(name);
console.log(typeof name);
// ye string hoti hai jo double quotes mein aati hai


let age = 25;
let price = 99.99;
console.log(age);
console.log(price);
console.log(typeof age);
// ye number datatype hai ye number aur decimal dono ko store karta hai

let isLoggedIn = true;
console.log(isLoggedIn);
console.log(typeof isLoggedIn);
// ye boolean datatype hai ye haa aur naa mein hota hai

let bigNumber = 123456789012345678901234567890n;
console.log(bigNumber);
console.log(typeof bigNumber);
// ye BigInt datatype hai ye banane ke liye number ke end mein n lagate hain.

let user = null;
console.log(user);
console.log(typeof user);
// ye null datatype hai aur ye object consider hota hai type mein value nahi hoti hai is mein

let city;
console.log(city);
console.log(typeof city);
// ye undefined type hai is mein value future mein aa sakti hai value baad mein aa sakta hai

let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1);
console.log(id2);
console.log(id1 === id2);
// ye unqiue cheezo ke liye hote hai




// non-primitive datatype hai ye :-Non-primitive data multiple values ya complex data store kar sakte hain.
let person = {
  name: "Mohammed",
  age: 25,
  isStudent: true
};
console.log(person);
console.log(typeof person);
// ye object hai is mein particular cheez ke sub categories k waisa hota hai


