const userInputStr2: string = "aabbccdd";
let withoutDuplicateStr = new Set<String>();
let duplicateChar = new Set<String>();

for (let i = 0; i < userInputStr2.length; i++) {
    for (let j = 0; j < userInputStr2.length; j++) {
        if (userInputStr2.charAt(i) == userInputStr2.charAt(j)) {
            duplicateChar.add(userInputStr2.charAt(i))
        }
        else {
            withoutDuplicateStr.add(userInputStr2.charAt(i))
        }
    }
}
console.log(`Without duplicate of character:- ${Array.from(withoutDuplicateStr)}`)