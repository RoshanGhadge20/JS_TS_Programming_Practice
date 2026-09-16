const sampleString: string = "Roshan Ghadge 123";

let result: string = "";
for (let i = 0; i <= sampleString.length; i++) {
    let charCodeOfString: number = sampleString.charCodeAt(i);

    if (charCodeOfString >= 97 && charCodeOfString <= 122) {
        result = result + String.fromCharCode(charCodeOfString - 32);
    }
    else {
        result = result + sampleString.charAt(i);
    }
}
console.log("UpperCase of String is:- ", result);