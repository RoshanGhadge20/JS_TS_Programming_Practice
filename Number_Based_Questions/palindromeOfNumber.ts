let num2: number = 525;
let originalNumber: number = num2;

let rev: number = 0;
let digit: number;

while (num2 > 0) {
    digit = num2 % 10;
    rev = (rev * 10) + digit;
    num2 = Math.floor(num2 / 10);
}

if (rev === originalNumber) {
    console.log(`reverse of number is:- ${rev}`);
}
else {
    console.log(`reverse of number is not equal to actual number`);
}