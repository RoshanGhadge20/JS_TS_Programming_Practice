function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        }
        return function (...next) {
            return curried.apply(this, [...args, ...next]);
        }
    }
};

function sum(a, b, c) {
    return a + b + c;
}

const curriedSum = curry(sum);
console.log(curriedSum(1));
console.log(curriedSum(1, 2)(2));

/* Here the function it wait until the all of the required parameters for the function are getting provided or not . if all the required parameters are provided then 
the respective function call gets made and output will be returned. If the required number of parameters are not passed then the funcion call is not made and returns the function itself*/
