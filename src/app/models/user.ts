export class User {

    constructor(
        id: number,
        firstName: string,
        lastName: string,
        username: string,
        password: string,
        email: string,
        addresses: Address[]
    ) {
        this.id = id
        this.firstName = firstName
        this.lastName = lastName
        this.username = username
        this.password = password
        this.email = email
        this.addresses = addresses
    }
    // classes enforce behavior around how an object can be init 
    // ctrl shift p, typescipr tconstrucotr generator 
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    email: string;
    addresses: Address[];
}

export class Address {

    constructor(
        street: string,
        secondary: string,
        state: string,
        city: string,
        zip: string
    ) {
        this.street = street
        this.secondary = secondary
        this.state = state
        this.city = city
        this.zip = zip
    }

    street: string;
    secondary: string;
    state: string;
    city: string;
    zip: string;

}