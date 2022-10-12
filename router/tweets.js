import express from 'express';
import 'express-async-errors';
import * as tweetRepository from '../data/tweet.js';

const router = express.Router();

//Get /tweets
//Get /tweets?username=:username
router.get('/', (req, res, next) => {
    const username = req.query.username;
    const data = username ? tweetRepository.getAllByUsername(username) : tweetRepository.getAll();
    res.status(200).json(data);
})
//Get /tweets:id
router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    const tweet = tweetRepository.getById(id);
    if (tweet) {
        res.status(200).json(tweet);
    } else {
        res.sendStatus(404).json({ message: `Tweet ${id} is not found` });
    }
})
//Post /tweets
router.post('/', (req, res, next) => {
    const { text, username, name } = req.body;
    const tweet = tweetRepository.create(name, username, text);
    res.status(201).json(tweet);
})
//Put /tweets:id
router.put('/:id', (req, res, next) => {
    const { id } = req.params;
    const { text } = req.body;
    const tweet = tweetRepository.update(id, text);
    if (tweet) {
        res.status(200).json(tweet);
    } else {
        res.status(404).json({ message: `Tweet ${id} is not found` });
    }

});
//Delete /tweets:id
router.delete('/:id', (req, res, next) => {
    const { id } = req.params;
    tweetRepository.remove(id);
    res.sendStatus(204);
});
export default router;