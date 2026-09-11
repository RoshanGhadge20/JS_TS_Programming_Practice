const arr3: number[] = [1, 2, 4, 5];
let maxCountOfElementsIntoArray: number = 5;
let actualSum: number = 0;
let sumOfNatualNumbers: number = 0;
for (const arr3Ele of arr3) {
    actualSum = arr3Ele + actualSum;
    sumOfNatualNumbers = (maxCountOfElementsIntoArray * (maxCountOfElementsIntoArray + 1)) / 2;
}
console.log(sumOfNatualNumbers);
console.log(actualSum);
console.log('Missing element is :-', sumOfNatualNumbers - actualSum);