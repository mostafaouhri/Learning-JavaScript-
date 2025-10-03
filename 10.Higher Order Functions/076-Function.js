/* 
- Reduce Practice
--- longest word
--- remove Characters + Use Reduce
*/

console.log("%c===> Higher Order Functions [Reduce] 76 <===", "color:red;");

// --- longest word
let theBiggest = ["Bla", "Propaganda", "Other", "AAA", "Battery", "Test"];
console.log(theBiggest);
let check = theBiggest.reduce(function (acc, current) {
    console.log(`Acc => ${acc}`);
    console.log(`Current Element => ${current}`);
    // console.log(`Current Element Index => ${index}`);
    // console.log(`Array => ${arr}`);
    console.log(acc.length > current.length ? acc : current);
    console.log("#############");
    return acc.length > current.length ? acc : current;
});
console.log(check);

// --- remove Characters + Use Reduce
let removeChars = ["O", "@", "@", "U", "H", "@", "@", "R", "@", "I"];
let finalString = removeChars.filter(function (ele) {
    return ele != "@";
})
    .reduce(function (acc, current, index, arr) {
        return `${acc}${current}`;
        // return acc + current
    });

console.log(finalString);