console.log("%c===> [20.Date_Generators_Modules] #161 <===", "color:darkgoldenrod;font-weight:bold");

// ---- Set Date And Time 

let dateNow3 = new Date();
console.log(dateNow3);

console.log("#".repeat(66));

dateNow3.setTime(0);
console.log(dateNow3);

dateNow3.setTime(10000);
console.log(dateNow3);

dateNow3 = new Date();
console.log(dateNow3);
console.log("#".repeat(66));

dateNow3.setDate(1);
console.log(dateNow3);

dateNow3.setDate(0);
console.log(dateNow3);

dateNow3.setDate(34);
console.log(dateNow3);

dateNow3.setDate(34);
console.log(dateNow3);

dateNow3.setFullYear(1998,6,12);
console.log(dateNow3);

dateNow3.setMonth(0,15);
console.log(dateNow3);

dateNow3.setHours(22,30,30,30);
console.log(dateNow3);

dateNow3.setMinutes(15,15,15);
console.log(dateNow3);

dateNow3.setSeconds(40,40);
console.log(dateNow3);

dateNow3.setMilliseconds(0);
console.log(dateNow3);



