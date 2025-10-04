/* 
- High Order Functions Challenges [Map, Filter, Reduce, forEach]

--- You Can Use
--- ,
--- _
--- space
--- True => 1 => One time only in the code 

-- You Cannot Use 
--- Numbers
--- Letters

-- You Must use [ Filter + Map + Reduce + Your Knowledge] 
--- Order is not Important
--- All in one chain
*/

console.log("%c===> Higher Order Functions [Challenges] 78 <===", "color:red;");

let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,z";
console.log(myString);

let solution = myString.split(',').filter(function (ele, i, arr) {
    arr[arr.length - 1] = "";
    return isNaN(ele);
})
    .map(function (ele, index, arr) {
        return ele.length == 2 ? ele.slice(0, 1) : ele;
    })
    .reduce(function (acc, current, index, arr) {
        current == "_" ? current = " " : current;
        return acc + current;
    });
console.log(solution);

