// arrays Methods :
// - Length 

myFriends = ['Hamza', 'Karim', "leila", "Rachid"];

console.log(myFriends.length);//4

myFriends[3] = 'Rania';
console.log(myFriends);

myFriends[6] = 'Ilyass';
console.log(myFriends);
console.log(myFriends.length);//7

myFriends[myFriends.length] = 'Walid';
console.log(myFriends);
console.log(myFriends.length);//8

myFriends[myFriends.length - 1] = 'Samir';
console.log(myFriends);
console.log(myFriends.length);//8

myFriends.length = 2;
console.log(myFriends);
