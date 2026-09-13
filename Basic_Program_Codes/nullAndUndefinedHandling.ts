let userName: undefined | null | string;
userName = undefined;
console.log(userName);
userName = null;
console.log(userName);
userName = 'Roshan'
console.log(userName);
userName = null;


console.log(`Use of nullish coelescing operator ${userName ?? 'Hello Roshan'}`);

userName = 'Roshan'
console.log('Null Assertion checker is ', userName!.toUpperCase());