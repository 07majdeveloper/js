// Date Get Methods (Date se information nikalna)
let date = new Date();
console.log(date);
console.log(`${date.getFullYear()} => current year deta hai`);
console.log(`${date.getMonth()} => month deta hai (0-11)`);
console.log(`${date.getDate()} => month ki date deta hai`);
console.log(`${date.getDay()} => week ka day deta hai (0-6)`);
console.log(`${date.getHours()} => current hour deta hai`);
console.log(`${date.getMinutes()} => current minutes deta hai`);
console.log(`${date.getSeconds()} => current seconds deta hai`);
console.log(`${date.getMilliseconds()} => current milliseconds deta hai`);
console.log(`${date.getTime()} => 23 Jan 1970 se milliseconds deta hai`);



// Date Set Methods (Date ko change karna)
date.setFullYear(2030);
console.log(`${date} => year change karta hai`);
date.setMonth(11);
console.log(`${date} => month change karta hai`);
date.setDate(25);
console.log(`${date} => date change karta hai`);
date.setHours(10);
console.log(`${date} => hours change karta hai`);
date.setMinutes(30);
console.log(`${date} => minutes change karta hai`);

// date formating methods

console.log(`${date.toDateString()} => readable date deta hai`);
console.log(`${date.toTimeString()} => readable time deta hai`);
console.log(`${date.toISOString()} => ISO format deta hai`);
console.log(`${date.toLocaleDateString()} => local date format deta hai`);
console.log(`${date.toLocaleTimeString()} => local time format deta hai`);
console.log(`${date.toLocaleString()} => local date aur time deta hai`);