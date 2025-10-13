console.log("%c===> [BOM] #113 <===", "color:red");
/*
===> BOM [Browser Object Model]
---- Session Storage
- setItem
- getItem
- removeItem
- clear
- key

---- Info 
- New Tab = New Session
- Duplicate Tab = Copy Session 
-  New Tab With Same Url = New Session
*/

window.localStorage.setItem('color', 'purple');
window.sessionStorage.setItem('color', 'pink');


if (window.sessionStorage.getItem("input-name")) {
    document.querySelector(".name").value = window.sessionStorage.getItem("input-name");
}

document.querySelector(".name").onblur = function () {
    window.sessionStorage.setItem("input-name", this.value);
};

