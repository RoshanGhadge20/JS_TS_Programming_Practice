
function getGCD(num1: number, num2: number): number {
    return num2 === 0 ? num1 : getGCD(num2, num1 % num2);
}

function getLCM(num1: number, num2: number): number {
    return (num1 * num2) / getGCD(num1, num2);
}

console.log(`Calling the GCD :- ${getGCD(12, 18)}`);
console.log(`Calling the LCM :- ${getLCM(12, 18)}`);