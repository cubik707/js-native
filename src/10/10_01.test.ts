import {
    addCompany,
    addNewBooksToUser,
    makeHairstyle,
    moveUser,
    moveUserToOtherHouse, removeBook, updateBook, updateCompany, updateCompany2,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType, WithCompaniesType
} from "./10_01";



test('reference type test', () => {
    let user: UserType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk'
        }
    }

    const awesomeUser = makeHairstyle(user, 2)

    expect(user.hair).toBe(32)
    expect(awesomeUser.hair).toBe(16)
    expect(awesomeUser.address).toBe(user.address)
})

test('change address', () => {
    let user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        }
    }

    const movedUser = moveUser(user,'Kiev')

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe('Kiev')
})

test('upgrade laptop to macbook', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react'],
    }

    const userCopy = moveUserToOtherHouse(user,99)

    expect(user).not.toBe(userCopy)
    expect(user.books).toBe(userCopy.books)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).not.toBe(userCopy.address)
    expect(userCopy.address.house).toBe(99)

})

test('add new books to user', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react'],
    }

    const userCopy = addNewBooksToUser(user,['ts', 'rest api'])

    expect(user).not.toBe(userCopy)
    expect(user.books).not.toBe(userCopy.books)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(userCopy.books[4]).toBe('ts')
    expect(userCopy.books[5]).toBe('rest api')

})

test('update js to ts', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react'],
    }

    const userCopy = updateBook(user,'js','ts')

    expect(user).not.toBe(userCopy)
    expect(user.books).not.toBe(userCopy.books)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(userCopy.books[2]).toBe('ts')
})

test('remove js book', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        books: ['css', 'html', 'js', 'react'],
    }

    const userCopy = removeBook(user,'js')

    expect(user).not.toBe(userCopy)
    expect(user.books).not.toBe(userCopy.books)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(userCopy.books[2]).toBe('react')
})

test('add new company', () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        companies: [{id:1, title: 'Epam'}, {id:2, title: 'IT-INCUBATOR'}]
    }

    const userCopy = addCompany(user, {id: 3, title: 'Google'})

    expect(user).not.toBe(userCopy)
    expect(user.companies).not.toBe(userCopy.companies)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(userCopy.companies[2].id).toBe(3)
    expect(userCopy.companies[2].title).toBe('Google')
})

test('update company title', () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Dimych',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12
        },
        laptop: {
            title: 'ZenBook'
        },
        companies: [{id:1, title: 'Epam'}, {id:2, title: 'IT-INCUBATOR'}]
    }

    const userCopy = updateCompany(user, 1, 'Епам') as UserWithLaptopType & WithCompaniesType

    expect(user).not.toBe(userCopy)
    expect(user.companies).not.toBe(userCopy.companies)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(userCopy.companies.length).toBe(2)
    expect(userCopy.companies[0].title).toBe('Епам')
})

test('update company', () => {
    let companies = {
        'Dimych': [{id:1, title: 'Epam'}, {id:2, title: 'IT-INCUBATOR'}],
        'Artem': [{id:2, title: 'IT-INCUBATOR'}]
    }

    const copy = updateCompany2(companies, 'Dimych', 1, 'EPAM')

    expect(copy['Dimych']).not.toBe(companies['Dimych'])
    expect(copy['Artem']).toBe(companies['Artem'])
    expect(copy['Dimych'][0].title).toBe('EPAM')
})
