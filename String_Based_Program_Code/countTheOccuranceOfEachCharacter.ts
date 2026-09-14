const sam1: string = "RoshanGhadge";
let countOfEachCharacter: number = 0;
for (let i = 0; i < sam1.length; i++) {
    for (let j = 1; j < sam1.length; j++) {
        if (sam1.charAt(i) === sam1.charAt(j)) {
            countOfEachCharacter++;
        }
    }
    console.log(`Character ${sam1.charAt(i)} is repeated :- ${countOfEachCharacter}`);
    countOfEachCharacter = 0;
}