console.log("%c===> [22.Promises] #183 <===", "color:green; font-weight:bold");

// Fetch API :

fetch("https://api.github.com/users/elzerowebschool/repos").then((result) => {
    console.log(result);
    let myDataa = result.json();
    console.log(myDataa);
    return myDataa;
})
    .then((myDataa) => {
        myDataa.length = 10;
        return myDataa;
    })
    .then((myDataa) => {
        console.log(myDataa[0].name);
    });