// Loop On Sequences :

let myFriends = ["hamza", "Karim", "Rachid", "Joe", "Med"];

console.log()
for (let i = 0; i < myFriends.length; i++) {
    console.log(myFriends[i]);
}

// ---------
let myFriends2 = [5, 5, "hamza", "Karim", "Rachid", "Joe", "Med"];
let onlyNames = [];

for (let i = 0; i < myFriends2.length; i++) {
    if (typeof myFriends2[i] === 'string') {
        onlyNames.push(myFriends2[i]);

    }
}
console.log('onlyNames :' , onlyNames);