const express = require('express');
const feedController = require('../controllers/feed');
const router = express.Router(); // create a router
router.get('/posts', feedController.getPosts); //get/feed/posts will be handled
router.post('/post',feedController.createPost); //post/feed/post will be handles
module.exports = router; //export the router