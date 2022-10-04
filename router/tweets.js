import express from 'express';
import 'express-async-errors';

const router = express.Router();

const tweets = [
    {
        id: 1,
        name: 'popo',
        username: 'popo',
        profileUrl: 'https://lh3.googleusercontent.com/ogw/AOh-ky2bR5KkWnwa8gBbrxQKurPk8144Ls0y7pVzUXBZKw=s32-c-mo',
        createdAt: Date.now().toString(),
        text: 'so sweet tweet'
    },
    {
        id: 2,
        name: 'bob',
        username: 'bob',
        profileUrl: 'https://lh3.googleusercontent.com/ogw/AOh-ky2bR5KkWnwa8gBbrxQKurPk8144Ls0y7pVzUXBZKw=s32-c-mo',
        createdAt: Date.now().toString(),
        text: 'tweet2'
    },
]

//Get /tweets
//Get /tweets?username=:username
router.get('/', (req, res, next) => {
    const username = req.query.username;
    const data = username ? tweets.filter(t => t.username === username) : tweets;
    res.status(200).json(data);
})
//Get /tweets:id
router.get('/:id', (req, res, next) => {
    const id = parseInt(req.params.id);
    const tweet = tweets.find(t => t.id === id);
    if (tweet) {
        res.status(200).json(tweet);
    } else {
        res.sendStatus(404).json({ message: `Tweet ${id} is not found` });
    }
})
//Post /tweets
//Put /tweets:id
//Delete /tweets:id
export default router;