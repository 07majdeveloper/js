let arr = [10, 20, 30, 40, 50];
console.log(arr);

// Array Properties
console.log(`${arr.length} => array ki total length batata hai`);

// Add / Remove Elements
console.log(arr.push(60),"end mein add karta hai");
console.log(arr);
console.log(arr.pop(),"end se remove karta hai"); 
console.log(arr);
console.log(arr.unshift(5),"start mein add karta hai");
console.log(arr);
console.log(arr.shift(), "start se remove karta hai");
console.log(arr);

// Search methods
console.log(`${arr.includes(20)} => value exist karti hai ya nahi check karta hai`);
console.log(`${arr.indexOf(30)} => value ka first index deta hai`);
console.log(`${arr.lastIndexOf(30)} => value ka last index deta hai`);

// Extract Methods
console.log(`${arr.slice(2, 3)} array ka portion nikalta hai`)
console.log(`${arr.splice(2, 40)} elements remove/replace karta hai`)


// Convert Methods
console.log(`${arr.join("-")} array ko string mein convert karta`);
console.log(arr);
console.log(`${arr.toString()} string mein convert karta hai`)
console.log(arr);


// Reverse and sort
console.log(`${arr.reverse()} array reverse karta hai`)
console.log(arr);
console.log(`${arr.sort()}array sort karta hai`)
console.log(arr);


// Numbers sorting
console.log(`${arr.sort((a, b) => a - b)} ascending`)
console.log(arr);
console.log(`${arr.sort((a, b) => b - a)} descending`)
console.log(arr);