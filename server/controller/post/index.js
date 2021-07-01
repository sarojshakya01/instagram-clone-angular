const express = require('express');
const router = express.Router();
const post = require('./post.controller');

router.get('/all', post.getPosts);
router.post('/like', post.likePost);

module.exports = router;