const sampleString3: string = "abcd";
const sampleString4: string = "cdba";

if (sampleString3.length === sampleString4.length) {
    let concatString = sampleString3 + sampleString3;
    // Based on the includes condition validating the details 
    if (concatString.includes(sampleString4)) {
        console.log('Both string are rotational to each other')
    }
    else {
        console.log('Both the strings are not rotational to each other');
    }
}
else {
    console.log('Both the strings are not rotationals to each other since its not qual to length');
}

