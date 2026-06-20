// stack memory
// stack memory mein primitive data copy by value hota hai ismme copy milti hai 
let a = 10;
let b = a;
b=30;
console.log(a); 
console.log(b); 


// heap memory
// ye memory mein non primitive data store hota hai aur direct data aur value refernce milta hai changes direct value mein hota hai 

let user1 = {
  name: "Mohammed"
};
let user2 = user1;
user2.name = "Ali";
console.log(user1.name); 
console.log(user2.name);