console.log("%c===> [Regular Expressions] #140 <===", "color:green");

/*
//    |=========> Regular Expressions <=========|
  - Quantifiers 1
  n+      => one or more
  n*      => zero or more
  n?      => zero or one
*/

let mails = "o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru";
let mailsRe = /\w@\w\w.sa/ig;
console.log(mails.match(mailsRe));
console.log(mails.match(/\w+@\w+.(com|net)/ig));
console.log(mails.match(/\w+@\w+.\w+/ig));

// ------------------------------------------------------------------------------
let nums2 = "0110 10 150 05120 0560 350 00";
console.log(nums2.match(/0\d+0/ig));
console.log(nums2.match(/0\d*0/ig));

// ------------------------------------------------------------------------------
let urls = "https://google.com http://www.website.net web.com";
console.log(urls.match(/https:/ig));
console.log(urls.match(/https?:/ig));
console.log(urls.match(/https?:\/\/(www.)?\w+.\w+/ig));
console.log(urls.match(/(https?:\/\/)?(www.)?\w+.\w+/ig));

