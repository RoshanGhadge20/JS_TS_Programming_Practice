const names: string[] = ['roshan', 'sanjay', 'ghadge', 'abhishek', 'vijaya', 'shubham'];

const filteredNames: string[] = names.filter((name) => name.includes('a'))
console.log('Filtered Names are the ', filteredNames)

const num: number[] = [10, 20, 30];
const numreduced: number = num.reduce((acc, sum) => sum + acc, 0);
console.log('With the help of reduced', numreduced);

const mappedArray = names.map((name) => name.toUpperCase());
console.log('mapped array with uppercase is', mappedArray);