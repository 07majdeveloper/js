let a = "25"
let b = 5
console.log(a+b)
// string ke saath number add karne per add nahi hoga lekin dono ko merge kar deyga jaissa 255

// iska solution hai
let c = "25"
let d = 5
console.log(Number(c)+d)
// output aayega 30 kyuki string ko number kardiya hai

// - minus operator se check 
let e = "25"
let f = 5
console.log(e-f)
// output aaya 20 toh ye hai ki Yahan JavaScript automatically "25" ko number mein convert kar deta hai.

// empty string se check
let g = "";
console.log(g)
// output aaya 0 agar Number mein convert karey toh


// ye kuch checks hai string to number karne ke






// prefix and post fix
let m = 100
console.log(m)
// same value hoti hai
console.log(++m)
// ye pehle addd kar deyta hai
console.log(m++)
// ye baad mein add karta hai