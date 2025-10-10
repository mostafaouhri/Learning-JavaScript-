console.log("%c===> [DOM] #95 <===", "color:red");

/*
=> DOM [Class List]
--- classlist
--- length
--- contains
--- item(index)
--- add
--- remove
--- toggle
 */

let element2 = document.getElementById("my-div");

console.log(element2.classList);
console.log(element2.classList.length);
console.log(element2.classList.contains("one"));
console.log(element2.classList.item(2));

element2.onclick = function () {
    element2.classList.add("add-one", "add-two");
    element2.classList.remove("one", "two");
    element2.classList.toggle("Hamid");
};
