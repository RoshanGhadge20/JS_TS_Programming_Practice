const arr11: number[] = [1, 2, 3, 4, 5];

// With the help of loops
let counter: number = arr11.length;
let sum: number = 0;
for (const elem of arr11) {
    sum = sum + elem;
}
console.log(`Average of elemnts into the array is ${sum / counter}`);

// Build in method of array
const avgValue = (arr11.reduce((sum, value) => sum + value, 0)) / counter;
console.log(avgValue);

