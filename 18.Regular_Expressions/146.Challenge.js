console.log("%c===> [Regular Expressions] #146 <===", "color:green");

/*
//    |=========> Regular Expressions <=========|
  - Challenge
*/
let url1 = 'elzero.org';
let url2 = 'http://elzero.org';
let url3 = 'https://elzero.org';
let url4 = 'https://www.elzero.org';
let url5 = 'https://www.elzero.org:8080/articles.php?id=100&cat=topics';

let re3 = /(https?:\/\/)?(www.)?\w+.org(.+)?/ig;

console.log(url1.match(re3));
console.log(url2.match(re3));
console.log(url3.match(re3));
console.log(url4.match(re3));
console.log(url5.match(re3));