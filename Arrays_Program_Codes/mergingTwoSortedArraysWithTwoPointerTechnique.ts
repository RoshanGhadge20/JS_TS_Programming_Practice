function mergeSortedArray(num1: number[], num2: number[]): number[] {
    const merged: number[] = [];
    let i: number = 0, j: number = 0;
    while (i < num1.length && j < num2.length) {
        if (num1[i] <= num2[j]) {
            merged.push(num1[i++]);
        }
        else {
            merged.push(num2[j++]);
        }
    }
    while (i < num1.length) {
        merged.push(num1[i++]);
    }
    while (j < num2.length) {
        merged.push(num2[j++])
    }

    return merged;
}

const result: number[] = mergeSortedArray([1, 2, 4], [2, 3])
console.log(result);