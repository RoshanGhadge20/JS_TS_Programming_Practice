const user =
{
    name: "Roshan",
    greetings() {
        console.log(`hello, Welcome ${this.name}`);
    }
};

const greetingFn = user.greetings;
// console.log(greetingFn()); // Here we have lost our value of the this keyword ( what name to be gets printed)


// console.log(greetingFn.call(user));
// Here we are calling the greetingFn with call() which it accepts the first argument as the what is the value of the this keyword


function goodMorning(punctuation, greetingMsg) {
    console.log(`${greetingMsg},  ${this.name}, very good morning ${punctuation}`);
}
console.log(goodMorning.apply(user, ['Hello', '!']));
// Here we calling the function with the help of the apply() which it actually accept ( first argument should be the what is the value of this, and rest arguments can be passed to the function values);

const personName =
{
    name: 'Roshan Ghadge'
}

function goodEvening() {
    console.log(`Very good evening ${this.name}`);
}

const callingRoshan = goodEvening.bind(personName);
console.log(callingRoshan());
// here we are actually calling the function with the bind keyword which it actually returns the new function and binded value to the function is no needed to passed it again.