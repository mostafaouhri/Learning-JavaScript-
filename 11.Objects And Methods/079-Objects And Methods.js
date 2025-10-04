/*
=> OBject :
--- Intro and what is object 
--- testing window object
--- accessing object
*/

let user = {
    // Properties
    theName: "Osama",
    theAge: 38,
    // Methods
    sayHello: function () {
        // return console.log(`Hello`);
        return `Hello`;
    },
};

console.log(user.sayHello());
