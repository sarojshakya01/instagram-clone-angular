const express = require('express');
const router = express.Router();
const comment = require('./comment.controller');

router.post('/add', comment.addComment);
router.post('/delete', comment.deleteComment);
router.post('/like', comment.likeCommment);

module.exports = router;