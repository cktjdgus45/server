let users = [
    {
        id: '1',
        username: 'bob',
        password: 'abcd1234',
        name: 'bob',
        email: 'cktjdgus45@naver.com',
        url: 'https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-1.png',
    },
]

export async function createUser(user) {
    const created = { ...user, id: Date.now().toString() };
    users.push(created);
    return created.id;
}
export async function findByUsername(username) {
    return users.find((user) => user.username === username);
}
