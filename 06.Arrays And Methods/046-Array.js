// Joinning Array :
// - concat 
// - join

myFriends = ['Ahmed','Med','Ali','osama','Jamal','Amir'];
let myNewFriends = ['Leila','Kawtar'];
let schoolFriends = ['Hamza','Hamid'];

let allFriends = myFriends.concat(myNewFriends,schoolFriends,"Youssra",["yassin","yassar"]);
console.log(allFriends);

console.log(allFriends.join());
console.log(allFriends.join(""));
console.log(allFriends.join(" @ "));
console.log(allFriends.join("|"));
console.log(allFriends.join("|").toUpperCase());

