console.log("%c===> [21.AJAX_&_JSON] #174 <===", "color:blueviolet;font-weight:bold");

// Call Stack & Web API

setTimeout(_ => console.log("Web API"), 0);

function one() {
    console.log("one");
};

function two() {
    one();
    console.log("two");
};

function three() {
    two()
    console.log("three");
};

three();

console.log("======================");
console.log("one");
console.log("two");
console.log("three");

