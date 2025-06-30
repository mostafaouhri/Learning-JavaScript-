/*
==> Searching Arrays : 
*/
let myfriend = ['Anas', 'mohssin', 'Mido', "Zohir", "Anas"];
console.log(myfriend.indexOf("Anas"));//0
console.log(myfriend.indexOf("Anas", 2)); //4

console.log(myfriend.lastIndexOf("Anas"));//4
console.log(myfriend.lastIndexOf("Anas", 2));//0

console.log(myfriend.includes("Anas"));//true
console.log(myfriend.includes("Anas", 2));//true

if (myfriend.indexOf('Mostafa') === -1) {
    console.log('Not Found');
}

console.log(myfriend.indexOf("Mostafa"));//-1
console.log(myfriend.lastIndexOf("Mostafa"));//-1
