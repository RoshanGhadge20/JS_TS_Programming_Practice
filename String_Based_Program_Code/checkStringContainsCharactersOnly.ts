const userInput6: string = "RoshanGhadge";
const chars: string = "abcdefghijklmnopqrstvuwxyz";

for (let i = 0; i < userInput6.length; i++) {
    const char: string = userInput6.charAt(i).toLowerCase();
    if (chars.includes(char)) {
        console.log(`contains only string`)
    }
    else {
        console.log(`except from character`)
    }
}