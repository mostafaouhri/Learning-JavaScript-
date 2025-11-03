console.log("%c===> [22.Promises] #187 <===", "color:green; font-weight:bold");


const myPromiseX = new Promise((resolve, reject) => {
    setTimeout(_ => {
        resolve("Iam The Good Promise");
    }, 3000);
});

// async function fetchData() {
//     console.log("Before Promise");
//     try {
//         console.log(await myPromiseX);
//     } catch (reson) {
//         console.log(`Reson : ${reson}`);
//     } finally {
//         console.log("After Promise");
//     }
// };

// fetchData();

//===============================================================
async function fetchData() {
    console.log("Before fetch");
    try {
        let myDataX = await fetch("https://api.github.com/users/elzerowebschool/repos");
        console.log(await myDataX.json());
    } catch (reson) {
        console.log(`Reson : ${reson}`);
    } finally {
        console.log("After fetch");
    }
};

fetchData();