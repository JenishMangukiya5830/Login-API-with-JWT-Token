const jwtmodel = require("../Models/JWTModel");
const sectret = "JENISH";
const jwt = require('jsonwebtoken');
const { hashSync, compareSync } = require("bcrypt");


module.exports.insert = (req,res) => {
    jwtmodel.create({
        name : req.body.name,
        email : req.body.email,
        phone : req.body.phone,
        password : hashSync(req.body.password,10)
    },(err,data) => {
        if(err)
        {
            console.log('data not insert');
            return res.json({'status' : "1","message" : "data not Insert"});
        }

        console.log(data);
        return res.json({'status' : "1","message" : data});

    });
}

module.exports.login = (req,res) => {

    console.log(req.body);

    jwtmodel.findOne({email : req.body.email},(err,user) => {
        if(err)
        {
            console.log('user not Found');
            return res.json({"message" : 'user not Found'});
        }

        if(user)
        {
            if(compareSync(req.body.password,user.password))
            {
                // const payload = {
                //     user : user
                // }
                const token = jwt.sign(user.toJSON(),sectret,{expiresIn : 1000});
                return res.json({"message" : 'login Successfullly',"token" : token});
            }
            else
            {
                return res.json({'message' : "incorrect Password"});
            }
        }
        else
        {
            return res.json({"message" : 'email not Found'});
        }

    })

}

module.exports.index = (req,res) => {
    return res.json({"message" : 'index page'});
}