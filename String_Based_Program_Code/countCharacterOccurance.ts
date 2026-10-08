const sampleString: string = "hello good evening and good morning";
let numberOfCharacters: number = sampleString.length;

// Simple logic to calculate 
let replacedStringCount: number = sampleString.replaceAll('g', "").length;
console.log(`Count of appearance of g is:- ${numberOfCharacters - replacedStringCount}`);