console.log("%c===> [20.Date_Generators_Modules] #167 <===", "color:darkgoldenrod;font-weight:bold");

// Modules 
// * Import & Export

import mostafa, { myNumber, arr, saySomeThing as s } from "./167.App.js";

console.log(myNumber);
console.log(arr);
console.log(s());
console.log(mostafa());

console.log("++++++++++++++++++++++");
import * as all from "./167.App.js";

console.log(all);
console.log(all.myNumber);
console.log(all.arr);
console.log(all.saySomeThing());
console.log(all.default());