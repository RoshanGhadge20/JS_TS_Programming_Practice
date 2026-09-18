const decimalNum: number = 25;

const binaryStr: string = decimalNum.toString(2);
console.log(`Decimal to binary:- ${binaryStr}`);

const binaryString: string = binaryStr;
const decimalNu: number = parseInt(binaryString, 2);
console.log(`Binary to decimal is:- ${decimalNu}`);