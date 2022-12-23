const passport = require('passport');

const jwtmodel = require('../Models/JWTModel');

const JWTStrategy = require('passport-jwt').Strategy;

const ExtractJwt = require('passport-jwt').ExtractJwt;

const secret = "JENISH";

let opts = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = secret;

passport.use(new JWTStrategy(opts,(payload,done) => {
    console.log(payload);
    jwtmodel.findOne({id : payload.id},(err,user) => {
        if(err)
        {
            return done(null,false);
        }

        if(!user)
        {
            return done(null,false);
        }

        return done(null,user);

    })
}));
