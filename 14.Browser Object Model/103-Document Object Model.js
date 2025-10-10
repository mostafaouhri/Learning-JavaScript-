/*
===> BOM [Browser Object Model]
--- alert(message) => need no response only ok available
--- confirm(message) => need response and return a boolean
--- prompt(message, default message) => collect data
- Not used in Real Projects.
*/
console.log("%c===> [BOM] #103 <===", "color:red");

window.alert('Test 1');
this.alert('Test 2');
alert('Test 3');
console.log('Test');

let confirmMsg = confirm("Are You Sure ?");
console.log(confirmMsg);

if (confirmMsg === true) {
    console.log("Item Deleted");
} else {
    console.log("Item Not Deleted");
}

let promptMsg = prompt("Suitable Day ?", "3 char only");
console.log(promptMsg);
