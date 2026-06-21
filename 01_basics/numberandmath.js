let num = 123.456;

// Common Number Methods
console.log(`${num.toFixed(2)} => decimal ke baad 2 digits rakhta hai`);
console.log(`${num.toPrecision(4)} => total significant digits set karta hai`);
console.log(`${num.toString()} => number ko string mein convert karta hai`);
console.log(`${num.valueOf()} => actual number value return karta hai`);
console.log(`${num.toExponential(2)} => scientific notation mein convert karta hai`);


// Number Properties
console.log(`${Number.MAX_VALUE} => JavaScript ka sabse bada possible number`);
console.log(`${Number.MIN_VALUE} => JavaScript ka sabse chhota positive number`);
console.log(`${Number.MAX_SAFE_INTEGER} => safe integer ki maximum value`);
console.log(`${Number.MIN_SAFE_INTEGER} => safe integer ki minimum value`);


// Number Checking Methods
console.log(`${Number.isInteger(10)} => check karta hai integer hai ya nahi`);
console.log(`${Number.isInteger(10.5)} => false return karega`);
console.log(`${Number.isNaN(NaN)} => check karta hai value NaN hai ya nahi`);
console.log(`${Number.isFinite()} => check karta hai finite number hai ya nahi`);

// String to Number Conversion
console.log(`${Number("123")} => string ko number mein convert karta hai`);
console.log(`${parseInt("123.99")} => integer part return karta hai`);
console.log(`${parseFloat("123.99")} => decimal number return karta hai`);


// Math Object Methods (Numbers ke saath bahut use hote hain)
console.log(`${Math.round(4.6)} => nearest integer deta hai`);
console.log(`${Math.floor(4.9)} => neeche wali integer value deta hai`);
console.log(`${Math.ceil(4.1)} => upar wali integer value deta hai`);
console.log(`${Math.trunc(4.9)} => decimal part hata deta hai`);
console.log(`${Math.abs(-10)} => positive value deta hai`);
console.log(`${Math.sqrt(25)} => square root nikalta hai`);
console.log(`${Math.pow(2, 3)} => power calculate karta hai`)
console.log(`${Math.max(10, 20, 30)} => sabse badi value deta hai`);
console.log(`${Math.min(10, 20, 30)} => sabse chhoti value deta hai`);
console.log(`${Math.random()} => 0 se 1 ke beech random number deta hai`);