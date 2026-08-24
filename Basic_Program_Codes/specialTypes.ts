/* let a: any = 5;
console.log(a);
a = "Roshan";
console.log(a);
a = true;
console.log(a); */

// With any data type provided gets no compile time error, even though its unsafe


let b: unknown = 7
console.log(b)
b = "roshan";
if (typeof (b) === 'string') {
    console.log('Printing the string into uppercase', b.toUpperCase());
}
console.log(b)

b = false;
if (typeof (b) === 'boolean') {
    console.log(b)
}

// Never special type
function throwError(msg: string): never {
    throw new Error(msg); // function never finishes normally
}

function infiniteLoop(): never {
    while (true) { } // never returns/ends
}