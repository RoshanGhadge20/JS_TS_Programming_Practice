let num5: number = 10;
let num6: number = 20;
/* 
num5 = num5 + num6; // a=a+b
num6 = num5 - num6; // b=a-b
num5 = num5 - num6; // a=a-b

console.log(num5);
console.log(num6);
 */

[num5, num6] = [num6, num5]
console.log(num5)
console.log(num6)