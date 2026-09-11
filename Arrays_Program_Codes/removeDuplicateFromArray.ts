const arr2: number[] = [1, 2, 3, 5, 3, 4, 4];


const uniqueArrayElement = new Set<Number>();
const commonArrayElement = new Set<Number>();

for (const elementOfArray of arr2) {
    if (uniqueArrayElement.has(elementOfArray)) {
        commonArrayElement.add(elementOfArray);
    }
    else {
        uniqueArrayElement.add(elementOfArray);
    }
}
console.log('Duplicate elements', commonArrayElement);
console.log('Unique Element', uniqueArrayElement)

