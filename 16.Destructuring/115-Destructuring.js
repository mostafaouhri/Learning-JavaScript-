console.log("%c===> [Destructuring-array] #115 <===", "color:red");
/*
===> Destructuring arrays part 1
*/

let a = b = c = d = 15;

let myFriends = ["Mostafa", "Hamid", "Nadia", "Mehdi"];

[a="A", b, c, d, e] = myFriends;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);

[x,y,,z] = myFriends;

console.log('------');
console.log(x);
console.log(y);
console.log(z);