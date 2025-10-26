console.log("%c===> [20.Date_Generators_Modules] #163 <===", "color:darkgoldenrod;font-weight:bold");

// ---- Tracking Operations Time 

// Serach 
// - performance.now()
// - performance.mark()

// Start Time

let start = new Date();

// Operation
// for (let i = 0; i <= 10000; i++) {
//     // document.writeln(`<div>${i}</div>`);
//     let div = document.createElement("div");
//     div.appendChild(document.createTextNode(i));
//     document.body.appendChild(div);
// };

// Time End
let end = new Date();

// Operation Duration
let duration = end - start;
console.log(duration);