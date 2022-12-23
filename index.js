const express = require('express');

const app = express();

const port = 8060;

const db = require('./config/mongoose');

const jwtmodel = require('./Models/JWTModel');

const passport = require('passport');

const passportJWT = require('./config/passport-jwt');

const expresssession = require('express-session');

app.use(expresssession({
    secret : 'JENISH',
    resave : false,
    saveUninitialized : false,
    cookie : {
        maxAge : 1000*60*24
    }
}))

app.use(express.urlencoded());

app.use(passport.initialize());
app.use(passport.session());

app.use('/',require('./Routes/index'));

app.listen(port,(err) => {
    if(err)
    {
        console.log('Server not Start');
    }
    console.log(`Server Start on Port : ${port}`);
})