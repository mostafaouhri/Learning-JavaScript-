console.log("%c===> [Destructuring-array] #117 <===", "color:red");
/*
===> Destructuring Arrays Part 3 : Swap Variables
*/

let book = "video";
let video = "book";

// // Save Book Value In Stash
// let stash = book;  //video

// // change book value 
// book = video; //book

// // cahnge video value
// video = stash;// video
[book, video] = [video, book];

console.log(book);
console.log(video);