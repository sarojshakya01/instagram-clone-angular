const express = require('express');
const router = express.Router();
const suggestion = require('./suggestion.controller');

router.get('/all', suggestion.getSuggestion);

module.exports = router;