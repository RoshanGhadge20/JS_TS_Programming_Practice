const sam3: string = "RoshanGhadge";
let countOfEachCharactersamp3: number = 0;

for (let i = 0; i < sam3.length; i++) {
    for (let j = 0; j < sam3.length; j++) {
        if (sam3.charAt(i) === sam3.charAt(j)) {
            countOfEachCharactersamp3++;
        }
    }
    if (countOfEachCharactersamp3 === 1) {
        console.log(`First non-repeating character from string is:- ${sam3.charAt(i)}`);
        break;
    }
    countOfEachCharactersamp3 = 0;
}