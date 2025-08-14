// Slicing Array :

console.log('----------------');
let freinds = ["ahmed","hamza","aziz","leila","rim","raina"];
console.log(freinds.slice());
console.log(freinds.slice(1));
console.log(freinds.slice(1,3));
console.log(freinds.slice(-3));
console.log(freinds.slice(1,-2));
console.log(freinds.slice(-4,-2));

console.log(freinds);

// freinds.splice(0,0,"Ronaldo","Trump");
// console.log(freinds);

freinds.splice(0,3,"Ronaldo","Trump");
console.log(freinds);

freinds.splice(0,2);
console.log(freinds);