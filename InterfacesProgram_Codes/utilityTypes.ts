// Partial it marks the field of all from the interface are as optional
interface pointers {
    x: number;
    y: number;
}

const roshanPoints: Partial<pointers> = {};
console.log(roshanPoints.x = 10);


// Required => Marking all the fields are the required only it needs to be mentioned everytime
const jituPoints: Required<pointers> = {
    x: 12,
    y: 15
};
console.log(jituPoints.x);
console.log(jituPoints.y);


// Record > it specifies that key and type included into it
const roles: Record<string, number> =
{
    'name': 15,
    'age': 15
}
console.log(roles.name);

// Pick > it picks up only the speicified of parameter
interface userDetails {
    name: string,
    age: number,
    mobileNumber: number;
}

const userD: Pick<userDetails, 'name'> =
{
    name: 'RoshanG'
}
console.log(userD.name);


// Omits > it omits the specified of parameters
const userO: Omit<userDetails, 'age' | 'name'> =
{
    mobileNumber: 565
}
console.log(userO.mobileNumber);

// ReadOnly > Once the value is assigned it cannot be changes 
const fixedUserDetails: Readonly<userDetails>
    =
{
    name: 'Roshan',
    age: 25,
    mobileNumber: 8656565654
}
console.log(fixedUserDetails.mobileNumber);