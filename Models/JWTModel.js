const mongoose = require('mongoose');

const jwtSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    phone : {
        type : Number,
        required : true
    },
    password : {
        type : String,
        required : true
    }
});

const jwtmodel = mongoose.model('jwt',jwtSchema);

module.exports = jwtmodel;