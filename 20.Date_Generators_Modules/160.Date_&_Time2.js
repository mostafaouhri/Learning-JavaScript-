console.log("%c===> [20.Date_Generators_Modules] #160 <===", "color:darkgoldenrod;font-weight:bold");

// ---- Get Date And Time 

let dateNow2 = new Date();
let birthday = new Date("jul 12, 98");
let dateDiff = dateNow2 - birthday;

console.log(birthday);
console.log(dateDiff / 1000 / 60 / 60 / 24 / 365);

console.log(dateNow2);
console.log(dateNow2.getTime()); // milliseconds 
console.log(dateNow2.getDate()); // day-of-the-month 
console.log(dateNow2.getFullYear());
console.log(new Date().getFullYear());
console.log(dateNow2.getMonth());
console.log(dateNow2.getDay()); // day-of-the-week
console.log(dateNow2.getHours());
console.log(dateNow2.getMinutes());
console.log(dateNow2.getSeconds());

