const num1: number = 11;

function checkPrime(num: number): boolean | undefined {

    for (let i = 2; i * i <= num; i++) {
        console.log(i);

        if (num % i === 0) {
            console.log(i);
            return false;
        }
    }
    return true;
}
console.log(checkPrime(7));
