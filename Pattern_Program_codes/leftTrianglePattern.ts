
/* 8
8 8
8 8 8
8 8 8 8
 */


for (let i = 0; i <= 4; i++) {
    let line: string = ""
    for (let j = 0; j <= 4; j++) {
        if (j <= i) {
            line = line + "*"
        }
        else {
            line = line + " "
        }
    }
    console.log(line)
}