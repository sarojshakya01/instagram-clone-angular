const express = require('express');
const router = express.Router();
const post = require('./user.controller');

router.get('/followers', post.getUsers);
router.get('/:userId', post.getUserDetails);

module.exports = router;