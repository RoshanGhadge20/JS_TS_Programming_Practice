interface user {
    name: string,
    email: string,
    age: number
}


type Admin =
    {
        name: string,
        role: string
    }

interface user  // here interface can be re-opned and merged at the any time with the existing structure
{
    password: string;
}

type ID = number | Admin;  // Here the types are used for the union , intersection and provides the type to another type as well/a