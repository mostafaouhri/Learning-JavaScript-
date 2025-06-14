//  Nasted If :

var price = 100;
var discount = false;
var discountAmount = 30;
var country = 'Morocco';
var student = true;


if (discount === true) {
    price -= discountAmount ;
}
else if (country === "Morocco") {
    if (student === true ) {
        price -= discountAmount + 30 ;
    }
    else {
        price -= discountAmount + 10 ;
    }
}
else { 
    price -= 10;
}

console.log(price);