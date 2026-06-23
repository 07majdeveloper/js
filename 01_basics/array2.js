// array accept any type of data \
let arr2 = ["farhan", "ali"];
arr2.push("khan");
console.log(arr2); // ['farhan', 'ali', 'khan'] => end mein element add karta hai

// concat() Do ya zyada arrays ko jodta hai.
let arr3 = ["farhan", "ali"];
console.log(arr3.concat(["khan", "ahmed"])); // ['farhan','ali','khan','ahmed'] => arrays ko join karta hai

// flat() Nested arrays ko flatten karta hai.
let arr4 = [1, 2, [3, 4], [5, 6]];
console.log(arr4.flat()); // [1,2,3,4,5,6] => nested array ko ek level flat karta hai


// Spread Operator (...) Array ke elements ko spread (faila) deta hai.
let arr5 = ["farhan", "ali"];
console.log([...arr5, "khan"]); // ['farhan','ali','khan'] => array copy karke new element add karta hai


// Array.isArray() Check karta hai value array hai ya nahi.
console.log(Array.isArray(["farhan"])); // true => ye array hai


// Array.from() Array-like ya iterable value ko array mein convert karta hai.
console.log(Array.from("farhan")); // ['f','a','r','h','a','n'] => string ko array mein convert karta hai


//>Array.of() Given values se naya array banata hai.
console.log(Array.of(1, 2, 3, 4));
// [1,2,3,4] => provided values se array create karta hai
console.log( Array.of("farhan", "ali"));
