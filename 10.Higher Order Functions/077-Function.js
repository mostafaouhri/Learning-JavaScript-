/* 
- forEach and Practice
--- method executes a provided function once for each array element.

- Syntax 

- Note
---  Doesnt return anything [undefined]
---  break will not break the loop
*/

console.log("%c===> Higher Order Functions [Reduce] 77 <===", "color:red;");

let allLis = document.querySelectorAll("ul li");
let allDivs = document.querySelectorAll("div div");

allLis.forEach(function (ele) {
    ele.onclick = function () {
        // console.log(this);
        allLis.forEach(function (ele) {
            ele.classList.remove("active");
        })
        this.classList.add("active");
        allDivs.forEach(function (ele) {
            ele.style.display = "none";
        })
    }
});
