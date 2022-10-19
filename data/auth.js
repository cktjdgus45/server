// abcd1234: $2b$12$PWiGll7L6dORnajr3hNqcO0Fntaua.otAuP6uRVS1x7LPXd3ToBlW
let users = [
    {
        id: '1',
        username: 'popo',
        password: '$2b$12$PWiGll7L6dORnajr3hNqcO0Fntaua.otAuP6uRVS1x7LPXd3ToBlW',
        name: 'popo',
        email: 'cktjdgus45@naver.com',
        url: 'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png',
    },
]

export async function createUser(user) {
    const created = { ...user, id: Date.now().toString() };
    users.push(created);
    return created.id;
}

export async function findById(id) {
    return users.find((user) => user.id === id);
}

export async function findByUsername(username) {
    return users.find((user) => user.username === username);
}
