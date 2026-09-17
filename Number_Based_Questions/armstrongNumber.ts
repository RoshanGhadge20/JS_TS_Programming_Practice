
let num3: number = 153;
let originalNumber1: number = num3;

let sum: number = 0;
let digit1: number, powerOfNumber: number;
let numberOfdigits: number = num3.toString().length;


while (num3 > 0) {
    digit1 = num3 % 10;
    powerOfNumber = Math.pow(digit1, numberOfdigits)
    sum = sum + powerOfNumber;
    num3 = Math.floor(num3 / 10);
}

if (sum === originalNumber1) {
    console.log(`Number is armstrong`);
}
else {
    console.log(`Number is not armstrong number`);
}
