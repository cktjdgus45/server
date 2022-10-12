let tweets = [
    {
        id: "1",
        name: 'popo',
        username: 'popo',
        profileUrl: 'https://lh3.googleusercontent.com/ogw/AOh-ky2bR5KkWnwa8gBbrxQKurPk8144Ls0y7pVzUXBZKw=s32-c-mo',
        createdAt: new Date(),
        text: 'so sweet tweet'
    },
    {
        id: "2",
        name: 'bob',
        username: 'bob',
        profileUrl: 'https://lh3.googleusercontent.com/ogw/AOh-ky2bR5KkWnwa8gBbrxQKurPk8144Ls0y7pVzUXBZKw=s32-c-mo',
        createdAt: new Date(),
        text: 'tweet2'
    },
];

export function getAll() {
    return tweets;
}
export function getAllByUsername(username) {
    return tweets.filter(tweet => tweet.username === username);
}
export function getById(id) {
    return tweets.find(tweet => tweet.id === id);
}
export function create(name, username, text) {
    const tweet = {
        id: Date.now().toString(),
        name,
        username,
        profileUrl: 'https://lh3.googleusercontent.com/ogw/AOh-ky2bR5KkWnwa8gBbrxQKurPk8144Ls0y7pVzUXBZKw=s32-c-mo',
        createdAt: new Date(),
        text
    };
    tweets = [tweet, ...tweets];
    return tweet;
}
export function update(id, text) {
    const tweet = tweets.find(tweet => tweet.id === id);
    if (tweet) {
        tweet.text = text;
    } else {
        throw new Error(`${id} not found`);
    }
    return tweet;
}

export function remove(id) {
    tweets = tweets.filter(tweet => tweet.id !== id);
}

