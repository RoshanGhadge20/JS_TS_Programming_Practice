const inputString: string = "aba";

const reversedString: string = inputString.split("").reverse().join("");
if (inputString === reversedString) {
    console.log(`Both the strings are palindrome`);
}
else {
    console.log(`Both the strings not are palindrome`);

}