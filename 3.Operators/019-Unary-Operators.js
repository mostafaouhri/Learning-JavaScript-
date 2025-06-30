/*
 + Unary Plus [Return number If Its Not Number]
 - Unary negation [Return Number If Its Not Number + Negates it]

 Test :
*/
console.log(+100);
console.log(+"100");
console.log(+"-100");
console.log(+"karim");//NaN
console.log(+"0XFF");//255
console.log(+null);//0
console.log(+false);
console.log(+true);

console.log(-200);
console.log(-"200");
console.log(-"-200");
console.log(-"karim");//NaN
console.log(-"0XFF");//-255
console.log(-null);//0
console.log(-false);
console.log(-true);

console.log(Number("1000000000"));