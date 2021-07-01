const express = require('express');
const router = express.Router();
const search = require('./search.controller');

router.get('/user', search.user);

module.exports = router;