const arr5: number[] = [1, 2, 3, 4];
const arr6: number[] = [1, 3, 4, 5];

const intersectionOfElements = new Set<Number>();

for (let a = 0; a < arr5.length; a++) {
    for (let b = 0; b < arr6.length; b++) {
        if (arr5[a] === arr6[b]) {
            intersectionOfElements.add(arr5[a]);
        }
    }
}
console.log('Intersectioned Common Elements', Array.from(intersectionOfElements));