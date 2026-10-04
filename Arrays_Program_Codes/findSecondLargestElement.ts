
const arr: number[] = [10, 20, 5, 30];

let largestNumber: number = 0;
let secondLargestNumber: number = 0;


for (const element of arr) {
    if (element > largestNumber) {
        secondLargestNumber = largestNumber;
        largestNumber = element
    }
    else if (element > secondLargestNumber && element !== largestNumber) {
        secondLargestNumber = element;
    }
}
console.log(`largest Number ${largestNumber}`);
console.log(`Second largest Number ${secondLargestNumber}`);



