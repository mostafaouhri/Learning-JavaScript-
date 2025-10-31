/*
==> Array :
- add & remove From Array.
*/
myFriends = ["Mostafa", "Mostafa"];
console.log(myFriends);

myFriends.unshift('Hamid', "Hamid");//add from beginning
console.log(myFriends);

myFriends.push('Iman', "Iman");//add from End
console.log(myFriends);

myFriends.shift(); //remove from beginning
console.log(myFriends);

let first = myFriends.shift(); //remove from beginning
console.log(myFriends);
console.log(first);//Hamid

myFriends.pop(); //remove from End
myFriends.pop(); //remove from End
console.log(myFriends);