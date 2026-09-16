const userName: string = "Roshan";
let vowel = 0, consonents = 0;
for (let i = 0; i < userName.length; i++) {
    if (('aeiou').includes(userName.charAt(i))) {
        vowel++
    }
    else {
        consonents++
    }
}
console.log(`vowels are the :- ${vowel}`);
console.log(`consonents are the :- ${consonents}`);