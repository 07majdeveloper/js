let name1 = "farhan"
let followers = 50
console.log("my name is", name1,"my follwers are",followers );
// => ye old method hai 


console.log(`my name is ${name1},my follwers are ${followers}`);
// ye modern way hai clean code 


let user = "farhan"
console.log(user.length);
console.log(user[2])





// strings ke methods with example
let name = "farhan";

console.log(`${name.toUpperCase()} => string ko UPPERCASE banata hai`);

console.log(`${name.toLowerCase()} => string ko lowercase banata hai`);

console.log(`${name.charAt(0)} => given index ka character deta hai`);

console.log(`${name.at(2)} => given index ka character deta hai`);

console.log(`${name.indexOf("r")} => character ki first position batata hai`);

console.log(`${name.lastIndexOf("a")} => character ki last position batata hai`);

console.log(`${name.includes("han")} => check karta hai text exist karta hai ya nahi`);

console.log(`${name.startsWith("far")} => check karta hai string kis se start ho rahi hai`);

console.log(`${name.endsWith("han")} => check karta hai string kis se end ho rahi hai`);

console.log(`${name.slice(1,4)} => string ka portion nikalta hai`);

console.log(`${name.substring(1,4)} => string ka part return karta hai`);

console.log(`${name.repeat(3)} => string ko multiple times repeat karta hai`);

console.log(`${name.replace("far","sar")} => text replace karta hai`);

console.log(`${name.concat(" khan")} => do strings ko join karta hai`);

console.log(`${name.padStart(10,"*")} => start mein characters add karta hai`);

console.log(`${name.padEnd(10,"*")} => end mein characters add karta hai`);

console.log(`${name.length} => string ki total length batata hai`);

console.log(`${name.split("")} => string ko array mein convert karta hai`);

console.log(`${name.search("h")} => character ki position find karta hai`);

console.log(`${name.match(/a/g)} => matching values return karta hai`);


