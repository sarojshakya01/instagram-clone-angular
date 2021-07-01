const express = require('express');
const router = express.Router();
const story = require('./story.controller');

router.get('/all', story.getStory);

module.exports = router;