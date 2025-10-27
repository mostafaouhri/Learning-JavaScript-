console.log("%c===> [21.AJAX_&_JSON] #175 <===", "color:blueviolet;font-weight:bold");

// Event Loop & Call Quene

console.log("One");
setTimeout(_ => console.log("Three"), 0)
setTimeout(_ => console.log("Four"), 0)
console.log("Two");

let myvar = 100;
myvar += 100;
console.log(myvar);