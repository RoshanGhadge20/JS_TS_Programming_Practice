let num4: number = 10;

let a: number = 0;
let b: number = 1;

let next: number;

// Simple with for loops
for (let i = 0; i < num4; i++) {
    console.log(a);
    next = a + b;
    a = b;
    b = next;
}


