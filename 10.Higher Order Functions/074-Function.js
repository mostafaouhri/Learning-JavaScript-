/* 
- Filter 
--- filter longest word by number

*/

console.log('%c===> Higher Order Functions [Filter] 74 <===', "color:red;");

// filter words more than 4 characters 
let sentence = "I Love Foood Code Too Playing Much";
console.log(sentence);

let smallWords = sentence.split(' ').filter(function (ele) {
    return ele.length <= 4;
}).join(' ');
console.log(smallWords);

// Filter strings + multiply 
let mix = "A13BS2ZX";

let mixContent = mix.split("").filter(function (ele) {
    return !isNaN(ele);
})
    .map(function (ele) {
        return ele * ele;
    }).join('');
console.log(mixContent);

