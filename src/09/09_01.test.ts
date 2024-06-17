type UserType = {
    name: string
    age: number
    address?:{
        title: string
    }
}

function icreaseAge(u: UserType) {
    u.age++;
}

test('big reference type test', () => {
    let user = {
        name: 'Dimych',
        age: 32
    }
    icreaseAge(user);
    expect(user.age).toEqual(33)
    const superman = user;
    superman.age = 1000;
    expect(user.age).toBe(1000)
})

test('array reference type test', () => {
    // var user ={
    //     name: 'Dimych',
    //     age: 32
    // }
    let users = [
        {
            name: 'Dimych',
            age: 32
        },
        {
            name: 'Dimych',
            age: 32
        },
    ]
    let admins = users;
    admins.push({name: 'Bandygan', age: 10})
    expect(users[2]).toEqual({name: 'Bandygan', age: 10})
})

test('value type test', () => {
    const address = {
        title: 'Minsk'
    }
    var user: UserType ={
        name: 'Dimych',
        age: 32,
        address: address
    }
   let addr = user.address
    let user2: UserType = {
        name: 'Natasha',
        age: 30,
        address: address
    }
    const users = [user, user2, {name: 'Misha', age: 4, address: address}]
    const admins = [user, user2]
    admins[0].name = 'Dmitry'
    expect(users[0].name).toBe('Dmitry')
    expect(user.name).toBe('Dmitry')
})

test('sort array test', () => {
    const letters = ['c', 'd', 'a', 'z', 'e'];

    letters.sort();
    expect(letters).toEqual(['a', 'c', 'd', 'e', 'z'])
});
