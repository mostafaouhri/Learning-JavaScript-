console.log("%c===> [BOM] #110 <===", "color:red");
/*
===> BOM [Browser Object Model]
--- practice => Scroll To top 
--- scrollX [Alias => pageXOffset]
--- scrollY [Alias => pageYOffset]
*/

console.log(window.scrollX === window.pageXOffset)

let btnScroll = document.querySelector('#up');

window.onscroll = function () {
    if (window.scrollY >= 600) {
        btnScroll.style.display = "block";
    }
    else {
        btnScroll.style.display = "none";
    }
};

btnScroll.onclick = function () {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth",
    });
};

