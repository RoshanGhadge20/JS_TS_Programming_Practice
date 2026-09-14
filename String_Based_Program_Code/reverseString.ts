const sampleString: string = "Roshan";

// With build in methods
// console.log(`Reverse String is:- ${sampleString.split("").reverse().join("")}`);


// Without built in methods
let reverseString: string = ""
for (let i = sampleString.length; i >= 0; i--) {
    reverseString = reverseString.concat(sampleString.charAt(i))
}
console.log(`Printing string element with reverse :- ${reverseString.toString()}`);