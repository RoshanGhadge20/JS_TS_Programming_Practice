const num11: number = 52;

if (num11 % 3 == 0 && num11 % 5 == 0) {
    console.log('Number is fizzbuzz');
}
else if (num11 % 3 == 0) {
    console.log('Number is fuzz');
}
else if (num11 % 5 == 0) {
    console.log('Number is buzz');
}
else {
    console.log('Number is not fizzbuzz');
}