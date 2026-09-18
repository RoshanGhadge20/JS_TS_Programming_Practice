const checkNum: number = 6;

let Num: number = checkNum;
let sum: number = 0;
for (let i = 1; i < checkNum; i++) {
    if (checkNum % i === 0) {
        sum = sum + i;
    }
}

console.log(sum);
if (checkNum === sum) {
    console.log('Number is perfect number')
}
else {
    console.log('Number is not perfect number');
}