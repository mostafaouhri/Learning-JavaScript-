/*
===> BOM [Browser Object Model]
- Local Storage Color Application Practice
*/
console.log("%c===> [BOM] #112 <===", "color:red");

let lis = document.querySelectorAll("ul li");
let div = document.querySelector(".experiment");

if (window.localStorage.getItem("color")) {
    // [1]=> add color to div
    div.style.backgroundColor = window.localStorage.getItem("color");
    // [2]=> remove .active from all li
    lis.forEach((li) => {
        li.classList.remove('active');
    });
    // [3]=> add .active to current color
    document.querySelector(`[data-color='${window.localStorage.getItem('color')}']`).classList.add('active');
}

lis.forEach((li) => {
    li.addEventListener('click', (e) => {
        // console.log(e.currentTarget.dataset.color);
        //remove active class from all lis
        lis.forEach((li) => {
            li.classList.remove('active');
        });
        // add active class to current element  
        e.currentTarget.classList.add('active');
        // add current color to local storage  
        window.localStorage.setItem("color", e.currentTarget.dataset.color);
        // change Div background color
        div.style.backgroundColor = e.currentTarget.dataset.color;
    });

});