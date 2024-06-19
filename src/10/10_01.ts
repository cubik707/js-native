export type UserType = {
    name: string
    hair: number
    address: {city: string, house?: number}
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserType & {
    books: Array<string>
}

type CompanyType = {id: number, title: string}; 
export type WithCompaniesType = {
    companies: Array<CompanyType>
}


export function makeHairstyle(u: UserType, power: number) {
    const copy = {
        ...u,
        hair: u.hair / power
    }
    return copy
}

export function moveUser(u: UserWithLaptopType, city: string) {
    return {
        ...u,
        address: {...u.address, city}
    }
}

export function moveUserToOtherHouse(u: UserWithLaptopType & UserWithBooksType, house: number) {
    return {
        ...u,
        address: {...u.address, house}
    }
}

export function addNewBooksToUser(u: UserWithLaptopType & UserWithBooksType, newBooks: string[]) {
    return {
        ...u,
        books: u.books.concat(newBooks)
    }

}


export function updateBook(u: UserWithLaptopType & UserWithBooksType, bookToChange: string, newBook: string) {
    return {
        ...u,
        books: u.books.map((book)=> book === bookToChange ? book=newBook : book)
    }
}

export function removeBook(u: UserWithLaptopType & UserWithBooksType, bookToRemove: string) {
    return {
        ...u,
        books: u.books.filter(book => book !== bookToRemove)
    }
}


export function upgradeUserLaptop(u: UserWithLaptopType, laptop: string) {
    return {
        ...u,
        laptop: {...u.laptop, title: laptop}
    }
}

export function addCompany(u: UserWithLaptopType & WithCompaniesType, newCompany: {id: number, title: string}) {
    return {
        ...u,
        companies: [...u.companies, newCompany]
    }
}

export function updateCompany(u: WithCompaniesType, id: number, newTitle: string) {
    return {
        ...u,
        companies: u.companies.map(company => company.id === id ? { ...company, title: newTitle} : company)
    }
}

export function updateCompany2(companies: {[key: string]: Array<CompanyType>},
                               username: string,
                               companyId: number,
                               newTitle: string) {
    let companyCopy = {...companies}
    companyCopy[username] = companyCopy[username].map(c => c.id === companyId ? {...c, title: newTitle} : c)
    return companyCopy
}
