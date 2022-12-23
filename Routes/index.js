const express = require('express');

const router = express.Router();

router.use('/api',require('./jwt'));

module.exports = router;