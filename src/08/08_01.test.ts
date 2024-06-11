import {usersObj} from "./08_01";


type UserType = {
    [key: string]: {id: number, name: string}
}

let users: UserType

beforeEach(()=> {
    users = {
        '101': {id: 101, name: 'Dimych'},
        '1212': {id: 1212, name: 'Natasha'},
        '1': {id: 1, name: 'Valera'},
        '3211': {id: 3211, name: 'Katya'},
    }
})

test("should update corresponding user from obj", () => {
    users['1'].name = "Ekaterina"
    expect(users["1"]).toEqual({id: 1, name: 'Ekaterina'});
})

test("should delete corresponding user from obj", () => {
    delete users['1']
    expect(users["1"]).toBe(undefined);
})