//  Loop Control :
// - Break 
// - Continue 
// - Label 

console.log('---------------');
let products2 = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];
let colors2 = ["Red", "Green", "Black"];

mainLoop: for (let i = 0; i < products2.length; i++) {
    if (products2[i] === 'Pen') {
        // break;
        // continue;
    }
    console.log(products2[i]);
    nastedLoop: for (let j = 0; j < colors2.length; j++) {
        console.log(`- ${colors2[j]}`);
        if (colors2[j]==='Green') {
            break mainLoop;
        }
    }
}