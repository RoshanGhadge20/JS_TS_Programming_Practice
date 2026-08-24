/*function sampleTest<T>(value: T): T {
    return value;
}

console.log(`Calling the function with string argument :-  ${sampleTest("Hello")}`);
console.log(`Calling the function with number argument :-  ${sampleTest(5)}`);
*/

function getLenght<T extends { length: number }>(item: T): number {
    return item.length;
}

console.log(`Calling with the function with string arguments :- ${getLenght("Hello")}`);
console.log(`Calling with the function with number  arguments :- ${getLenght([1, 3, 3])}`);
