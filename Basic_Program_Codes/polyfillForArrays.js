Array.prototype.myMap = function (callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
};

console.log([1, 2, 3].myMap(x => x * 2));

// polyfills it re-implements the a built in method for behaviour my map is attached to the array.prototype and its available 
// on every element of array which it refers to the array the method it called on. 