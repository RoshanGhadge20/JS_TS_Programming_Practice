const Str1: string = "Roshan";
const Str2: string = "nahsor";

if (Str1.length === Str2.length) {
    const sortedstr1: string = Str1.split("").sort().join("");
    const sortedstr2: string = Str2.split("").sort().join("");
    if (sortedstr1.toLowerCase() === sortedstr2.toLocaleLowerCase()) {
        console.log(`Both the strings are anagram`);
    }
    else {
        console.log(`Both the strings are not anagram`);
    }
}
else {
    console.log(`Both the strings are not anagram`);
}