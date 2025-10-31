
// Function  :
// - Rest Parameters
// - Only One Allowed
// - Must Be Last Element

console.log("-----------");
function calc(...numbers) {
    // console.log(Array.isArray(numbers));

    let result = 0;

    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
        result += numbers[i];
    }
    return `Final Result Is =>${result}`;
}
console.log(calc(10, 20, 30, 40, 50));