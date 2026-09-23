const userInput5: string = "Hello, Roshan Ghadge Here";

const splittedUserInput = userInput5.split(" ");
let reverseWord: string = ""
let reverseSentense: string = "";
for (const indWords of splittedUserInput) {
    for (let i = indWords.length; i >= 0; i--) {
        reverseWord = reverseWord.concat(indWords.charAt(i));
    }
    reverseSentense = reverseSentense.concat(reverseWord, " ");
    reverseWord = "";
}
console.log(reverseSentense.trim());