const arr1: number[] = [1, 2, 3, 3, 4, 2, 0];

let uniqueElement = new Set<Number>();
let commonElement = new Set<Number>();

for (const ele of arr1) {
    if (uniqueElement.has(ele)) {
        console.log('Unique element ', ele)
        commonElement.add(ele);
    }
    else {
        uniqueElement.add(ele)
    }
}
console.log('All Common elements:-', Array.from(commonElement))

