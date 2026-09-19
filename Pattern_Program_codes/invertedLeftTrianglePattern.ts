/* 8888
888
88
8
 */


for (let i = 1; i <= 4; i++) {
    let line: string = "";
    for (let j = 4; j >= i; j--) {
        line = line + "*";
    }
    console.log(line)
}
