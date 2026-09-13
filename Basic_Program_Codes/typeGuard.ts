let user: string = "RG";
if (typeof (user) === 'string') {
    console.log(user)
}


class Bird {
    fly() {
        console.log("Flying...");
    }
}

class Fish {
    swim() {
        console.log("Swimming...");
    }
}

const fishObj = new Fish()
function sampleTest(callMethod: Bird | Fish) {
    if (callMethod instanceof Bird) {
        callMethod.fly()
    }
    else {
        callMethod.swim();
    }
}