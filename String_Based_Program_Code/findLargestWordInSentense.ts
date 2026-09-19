const userInput8: string = "RoshanG Sanjay Ghadge";
const userInputSplitted: string[] = userInput8.split(" ");
let largestWord: string = "";
// let count: number = 0;
for (const userI of userInputSplitted) {
    if (userI.length > largestWord.length) {
        largestWord = userI;
    }
}

console.log(largestWord);