const sampleString1: string = "Roshan Ghadge 123";

// Logic to convert into lowwercase without any inbuilt method
let result1: string = "";
for (let i = 0; i <= sampleString1.length; i++) {
    let charCodeOfString: number = sampleString1.charCodeAt(i);

    if (charCodeOfString >= 65 && charCodeOfString <= 90) {
        result1
            = result1
            + String.fromCharCode(charCodeOfString + 32);
    }
    else {
        result1
            = result1
            + sampleString1.charAt(i);
    }
}
console.log("LowerCase of String is:- ", result1

);