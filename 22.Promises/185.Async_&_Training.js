console.log("%c===> [22.Promises] #185 <===", "color:green; font-weight:bold");

// Async :

// function getData() {
//     return new Promise((res, rej) => {
//         let users = ["Mostafa"];
//         if (users.length > 0) {
//             res("Users Found");
//         } else {
//             rej(Error("Users Not Found"));
//         }
//     })
// };
// getData().then(
//     (res) => console.log(res),
//     (rej) => console.log(rej)
// );

async function getData() {

    let users = [];
    if (users.length > 0) {
        // return Promise.resolve("Users Found");
        return ("Users Found");
    } else {
        // return Promise.reject("Users Not Found");
        throw new Error("Users Not Found");
    };
};

console.log(getData());

getData().then(
    (res) => console.log(res),
    (rej) => console.log(rej)
);