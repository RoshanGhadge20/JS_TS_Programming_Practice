interface product {
    id: number,
    name: string,
    price: number
}

type userRoles =
    {
        name: string,
        desingation: string
    }

const actualProduct: product =
{
    id: 5,
    name: 'Roshan',
    price: 1000
}

// Partial Utility
type partialProducts = Partial<product> // Here all the fields are become the options 

const partialActualProducts: partialProducts =
{
    name: "Notebook"
}
console.log("Printing partial product ", partialActualProducts);

// Pick utility
type pickProducts = Pick<userRoles, 'name'>
const pickedProduct: pickProducts =
{
    name: 'RG'
}
console.log("Picked Product", pickedProduct)

// Omit utility
type omitedProducts = Omit<product, 'price'>
const omitedProudct: omitedProducts =
{
    id: 2,
    name: 'RG'
}
console.log("Omitted Product", omitedProudct)

// readonly utility
type readonlyProducts = Readonly<product>;
const readonlyAllowedProduct: readonlyProducts = {
    id: 5,
    name: 'Rg',
    price: 55
}
console.log("Readoonly Products", readonlyAllowedProduct);

