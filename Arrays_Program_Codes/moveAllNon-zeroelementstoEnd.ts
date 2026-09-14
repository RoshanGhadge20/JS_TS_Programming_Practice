const arr13: number[] = [1, 0, 3, 4, 0, 2, 0, 5];

let zeroElement: number[] = [];
let nonzeroElement: number[] = [];

for (const arrEle of arr13) {
    if (arrEle === 0) {
        zeroElement.push(arrEle);
    }
    else {
        nonzeroElement.push(arrEle);
    }
}
console.log(`Original Array is:- ${arr13}`)
console.log(`Printing all zero elements at the end:- ${[...nonzeroElement, ...zeroElement]}`);
