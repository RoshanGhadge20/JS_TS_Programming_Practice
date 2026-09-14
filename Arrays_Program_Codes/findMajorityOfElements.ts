const arr14: number[] = [2, 2, 1, 1, 1, 2, 2];

let numberOfElements: number = arr14.length;
let majorityCondition: number = (arr14.length) / 2;
let count: number = 0;
const newMajorityArr: number[] = [];

for (let i = 0; i < arr14.length; i++) {
    for (let j = 0; j < arr14.length; j++) {
        if (arr14[i] == arr14[j]) {
            count++;
            if (count > majorityCondition && !newMajorityArr.includes(arr14[i])) {
                newMajorityArr.push(arr14[i])
            }
        }
    }
    count = 0
}
console.log(`Majority Of Array is :- ${newMajorityArr}`);