import express from 'express';
import 'express-async-errors';

const router = express.Router();

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

//Get /tweets
//Get /tweets?username=:username
router.get('/', (req, res, next) => {
    const username = req.query.username;
    const data = username ? tweets.filter(t => t.username === username) : tweets;
    res.status(200).json(data);
})
//Get /tweets:id
router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    const tweet = tweets.find(t => t.id === id);
    if (tweet) {
        res.status(200).json(tweet);
    } else {
        res.sendStatus(404).json({ message: `Tweet ${id} is not found` });
    }
})
//Post /tweets
router.post('/', (req, res, next) => {
    const { text, username, name } = req.body;
    const tweet = {
        id: Date.now().toString(),
        name,
        username,
        profileUrl: 'https://lh3.googleusercontent.com/ogw/AOh-ky2bR5KkWnwa8gBbrxQKurPk8144Ls0y7pVzUXBZKw=s32-c-mo',
        createdAt: new Date(),
        text
    };
    tweets = [tweet, ...tweets];
    res.status(201).json(tweet);
})
//Put /tweets:id
router.put('/:id', (req, res, next) => {
    const { id } = req.params;
    const { text } = req.body;
    const tweet = tweets.find(t => t.id === id);
    if (tweet) {
        tweet.text = text;
        res.status(200).json(tweet);
    } else {
        res.status(404).json({ message: `Tweet ${id} is not found` });
    }

});
//Delete /tweets:id
router.delete('/:id', (req, res, next) => {
    const { id } = req.params;
    tweets = tweets.filter(t => t.id !== id);
    res.sendStatus(204);
});
export default router;