// Arrays 

let myFriends = ["Mostafa", "Mohamed", "said", ["Sarah", "Najat"]];

console.log(`Hello ${myFriends[0]}`)
console.log(`Hello ${myFriends[1]}`)
console.log(`Hello ${myFriends[1][2]}`)

console.log(`Welcome ${myFriends[3]}`)
console.log(`Hi ${myFriends[3][0]}`)
console.log(`Hi ${myFriends[3][1]}`)
console.log(myFriends[3][1][0])

console.log(myFriends)
myFriends[1] = "Leila";
console.log(myFriends)

myFriends[3] = "Hind";
console.log(myFriends)

myFriends[3] = ["hamza","Hamid","youssef"];
console.log(myFriends)

console.log(Array.isArray(myFriends));
