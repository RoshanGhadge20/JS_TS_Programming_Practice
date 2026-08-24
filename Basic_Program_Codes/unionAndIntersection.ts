type Status = "PASS" | "FAILED" | "lOADING" | "ATKT"

interface person {
    name: string
}

interface employee {
    salary: number,
    designation: string
}

type userDetails = person & employee;

const employee1: userDetails =
{
    name: 'Roshan',
    salary: 1000,
    designation: 'QA Automation Eng'
}

function getStatus(status: Status) {
    console.log(`Printing the status after calling the method ${status}`)
}

getStatus('PASS');

