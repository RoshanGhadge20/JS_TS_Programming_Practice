const elements: number[] = [10, 2, 3, 5, 8];

let firstSmallestNumber = Infinity;
let secondSmallestNumber = Infinity;

for (const element of elements) {
    if (element < firstSmallestNumber) {
        secondSmallestNumber = firstSmallestNumber;
        firstSmallestNumber = element;
    }
    else if (element < secondSmallestNumber && element !== secondSmallestNumber) {
        secondSmallestNumber = element;
    }
}

console.log('First smallest number', firstSmallestNumber);
console.log('Second smallest number', secondSmallestNumber);
