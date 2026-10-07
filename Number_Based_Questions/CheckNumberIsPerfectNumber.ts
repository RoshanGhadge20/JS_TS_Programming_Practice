const checkNum: number = 6;

let Num: number = checkNum;
let sum1: number = 0;

for (let i = 1; i < checkNum; i++) {
    if (checkNum % i === 0) {
        sum1 = sum1 + i;
    }
}

console.log(sum1);
if (checkNum === sum1) {
    console.log('Number is perfect number')
}
else {
    console.log('Number is not perfect number');
}