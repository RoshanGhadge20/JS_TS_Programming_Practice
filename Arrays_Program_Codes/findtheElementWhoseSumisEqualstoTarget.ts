const arr4: number[] = [12, 3, 4, 5];


let target: number = 9;
const elementWithMatchingPair = new Set<Number>();

for (let i = 0; i < arr4.length; i++) {
    for (let j = 1; j < arr4.length; j++) {
        if (arr4[i] + arr4[j] === target) {
            // console.log(`Element with matching pair to target ${arr4[i]} ${arr4[j]} `)
            elementWithMatchingPair.add(arr4[i]);
            elementWithMatchingPair.add(arr4[j]);
        }
    }
}
console.log('Element with marching pair', Array.from(elementWithMatchingPair))