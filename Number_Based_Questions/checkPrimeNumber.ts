const num1: number = 11;

function checkPrime(num: number): boolean | undefined {

    for (let i = 2; i <= num; i++) {
        if (num % i === 0) {
            // console.log(i);
            return false;
        }
        return true;
    }
}
console.log(checkPrime(11));
// console.log(checkPrime(4));