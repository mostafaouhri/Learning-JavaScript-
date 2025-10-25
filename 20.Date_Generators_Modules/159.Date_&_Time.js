console.log("%c===> [20.Date_Generators_Modules] #159 <===", "color:darkgoldenrod;font-weight:bold");

// ---- Date And Time

let dateNow = new Date();

console.log(dateNow);

console.log(Date.now());

let seconds = Date.now() / 1000;
console.log(`seconds: ${seconds}`);

let minutes = seconds / 60;
console.log(`minutes: ${minutes}`);

let hours = minutes / 60;
console.log(`hours: ${hours}`);

let days = hours / 24;
console.log(`days: ${days}`);

let years = days / 365;
console.log(`years: ${years}`);


