const express = require('express');
const passport = require('passport');

const router = express.Router();

const jwtcontroller = require('../Controllers/JWTController');

router.post('/',jwtcontroller.insert);
router.post('/login',jwtcontroller.login);
router.get('/index',passport.authenticate('jwt',{session : false}),jwtcontroller.index);

module.exports = router;