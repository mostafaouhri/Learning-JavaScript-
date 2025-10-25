console.log("%c===> [20.Date_Generators_Modules] #162 <===", "color:darkgoldenrod;font-weight:bold");

// ---- Formatting Date And Time 

console.log(Date.parse("jul 12 1998"));

let date1 = new Date(0);
console.log(date1);

let date2 = new Date(900201600000);
console.log(date2);

let date3 = new Date("7-12-1998");// [7 / 12 / 1998]||[7-12-1998]||[7 12 1998]
console.log(date3);

let date4 = new Date("1998 7 12");
console.log(date4);

let date5 = new Date("1998@7");
console.log(date5);

let date6 = new Date("98");
console.log(date6);

let date7 = new Date(1998, 6, 12, 8, 50, 30);
console.log(date7);

let date8 = new Date(1998, 6, 12);
console.log(date8);

let date9 = new Date("1998-07-12T06:12:12Z");
console.log(date9);