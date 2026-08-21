function counter() {
    let count = 0;
    return function () {
        count++;
        return count;
    }
};


const callCounter = counter();
console.log(`Printing the output after calling the counter() :- `, callCounter);

console.info(`Now calling the callCounter function()`);
console.log(callCounter());
console.log(callCounter());
console.log(callCounter());

/* We have created a closure though this which is basically the =>  inner function still have the access of the outer function variable even after the outer function 
has already return the value but inner function keeps the reference of the value and update the count of that variable instead resetting the value of that variable. 
Note :- Closure it always capture the variable by its reference not globally.
*/