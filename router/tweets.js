import express from 'express';
import 'express-async-errors';
import { body } from 'express-validator';
import * as tweetController from '../controller/tweet.js';
import { validate } from '../middleware/validator.js';

const router = express.Router();

const validateTweet = [
    body('text')
        .trim()
        .isLength({ min: 3 })
        .withMessage('text should be at least 3 characters'),
    validate,
];

//Get /tweets
//Get /tweets?username=:username
router.get('/', tweetController.getTweets)
//Get /tweets:id
router.get('/:id', tweetController.getTweet)
//Post /tweets
router.post('/', validateTweet, tweetController.createTweet)
//Put /tweets:id
router.put('/:id', validateTweet, tweetController.updateTweet);
//Delete /tweets:id
router.delete('/:id', tweetController.deleteTweet);
export default router;