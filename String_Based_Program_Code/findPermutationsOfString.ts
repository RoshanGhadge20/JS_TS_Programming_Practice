function permute(str: string): string[] {
    let result: string[] = [];
    if (str.length < 2) {
        return [str];
    }

    for (let i = 0; i < str.length; i++) {
        const currentChar = str.charAt(i);
        const remainingCharacters: string = str.slice(0, i) + str.slice(i + 1);

        for (let ele of permute(remainingCharacters)) {
            result.push(currentChar + ele);
        }
    }
    return result;
}

console.log(permute("Roshan"));