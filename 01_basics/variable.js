const accountID = 123456789;
// accountID=9876543210; const cant be assigned again it locks the value
// console.log(accountID);
let state = "telangana";
// state="maharashta" can be reassign
// console.log(state)

var user = "John Doe";
// user="25farhan" can be reassign but it have issue in block and functional scope isliye use nahi karte
// console.log(state)  


let source;
// aisa ke liye output undefined aata hai yaani future mein value aa sakti hai abhi nai hai 
// console.log(source)  


// console.log(source) ye single element ko he print karta hai
// console.table([source,user,accountId]) ye zyada elements ko print kara na ke liye use hota hai 

console.table([source,user])