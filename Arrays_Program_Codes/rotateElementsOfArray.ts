const arr9: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
let count: number = arr9.length;

let k: number = 5;
k = k % count;
console.log(...arr9.slice(count - k), ...arr9.slice(0, count - k));