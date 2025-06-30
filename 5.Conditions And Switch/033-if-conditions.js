/*
==> Control Flow :
*/


var price = 100;
var discount = true;
var discountAmount = 30;
var country = 'Morocco';


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