/*
==> Control Flow :
*/


let price = 100;
let discount = true;
let discountAmount = 30;
let country = 'Morocco';


if (discount === true) {
    price -= discountAmount ;
}
else if (country === "Morocco") {
    price -= 40 ;
}
else { 
    price -= 10;
}

console.log(price);