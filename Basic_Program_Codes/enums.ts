enum Direction {
    UP,
    DOWN,
    LEFT,
    RIGHT
}

let move: Direction = Direction.UP;
console.log(`Printing the direction:- ${move}`);


enum Role {
    admin = "ADMIN",
    user = "USER",
    it = "IT"
}

const userRole: Role = Role.it;
console.log(`User role:- ${userRole}`);