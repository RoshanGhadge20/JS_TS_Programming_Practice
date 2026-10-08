const sampleString2: string = "Roshan";

// With build in methods
// console.log(`Reverse String is:- ${sampleString2.split("").reverse().join("")}`);


// Without built in methods
let reverseString: string = ""
for (let i = sampleString2.length; i >= 0; i--) {
    reverseString = reverseString.concat(sampleString2.charAt(i))
}
console.log(`Printing string element with reverse :- ${reverseString.toString()}`);