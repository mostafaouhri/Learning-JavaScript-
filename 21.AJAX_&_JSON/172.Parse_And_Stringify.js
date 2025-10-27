console.log("%c===> [21.AJAX_&_JSON] #172 <===", "color:blueviolet;font-weight:bold");
// JSON
// JSON.parse
// JSON.stringify

const myJsonObjectFromServer = '{"username":"Osama","age":"38"}';
console.log(typeof myJsonObjectFromServer);
console.log(myJsonObjectFromServer);

const myObject = JSON.parse(myJsonObjectFromServer);

console.log(typeof myObject);
console.log(myObject);

myObject["username"] = "Ouhri";
myObject["age"] = 27;
console.log(myObject);

const myJsonObjectToServer = JSON.stringify(myObject);
console.log(myJsonObjectToServer);
