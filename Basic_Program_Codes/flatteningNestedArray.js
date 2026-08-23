function flatten(arr) {
    return arr.reduce((flat, item) => {
        return flat.concat(Array.isArray(item) ? flatten(item) : item);
    }, []);
}

console.log(flatten([1, [2, 3, [4, 5]]]));

// Ite recusrionly checks that each elements of array , if itself is an array then it flatten it and if its single element then its added to arbitary nested paths