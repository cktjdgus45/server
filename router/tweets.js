import express from 'express';
import 'express-async-errors';
import * as tweetController from '../controller/tweet.js';

const router = express.Router();

//Get /tweets
//Get /tweets?username=:username
router.get('/', tweetController.getTweets)
//Get /tweets:id
router.get('/:id', tweetController.getTweet)
//Post /tweets
router.post('/', tweetController.createTweet)
//Put /tweets:id
router.put('/:id', tweetController.updateTweet);
//Delete /tweets:id
router.delete('/:id', tweetController.deleteTweet);
export default router;