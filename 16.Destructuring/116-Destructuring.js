console.log("%c===> [Destructuring-array] #116 <===", "color:red");
/*
===> Destructuring arrays part 2
*/

myFriends = ["Mostafa", "Hamid", "Nadia", ["Rania", "Sarah", ["Yassin", "Osama"]]];

console.log(myFriends[3][2][1]);

[, , , [a, , [, b]]] = myFriends;

console.log(a);
console.log(b);