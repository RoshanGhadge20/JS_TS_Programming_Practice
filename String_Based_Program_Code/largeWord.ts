const userInput9: string = "RoshanG Sanjay Ghadge";
const userInputSplitted9: string[] = userInput9.split(" ");
let largestWord9: string = "";
for (const userI of userInputSplitted9) {
    if (userI.length > largestWord9.length) {
        largestWord9 = userI;
    }
}

console.log(largestWord9);