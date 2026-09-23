abstract class shape {
    abstract area(): number;
    describe() {
        console.log(`Descrbing the area is ${this.area()}`);
    }
}

class circle extends shape {
    constructor() {
        super();
    }
    area(): number {
        return Math.PI ** 2;
    }
}

const circleObject = new circle();
console.log(circleObject.describe());