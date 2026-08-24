function callingProgram(a: string, b: string): string;
function callingProgram(a: number, b: number): number;
function callingProgram(a: any, b: any): any {
    console.log(a + b);
}
// callingProgram(true, true); not allowed
callingProgram("roshan", "roshan");
