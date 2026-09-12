const arr10: number[] = [1, 4, 5];

let max: number = arr10[0];
let min: number = arr10[0];
for (const element of arr10) {
    if (element > max) {
        max = element;
    }
    else if (element < min) {
        min = element;
    }
}
console.log(`Maximum element in array is ${max} and minimum element into array is ${min}`);