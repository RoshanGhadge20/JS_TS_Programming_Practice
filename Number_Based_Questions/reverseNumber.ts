let num8: number = 5847;
const originalNum: number = num8;

let digit2: number;
let rev2: number = 0;

// Reverse Number Logic 

while (num8 > 0) {
    digit2 = num8 % 10;
    rev2 = (rev2 * 10) + digit2;
    num8 = Math.floor(num8 / 10);
}
console.log(`reverse of number is ${rev2}`)