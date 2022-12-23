const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/jwtapi");

mongoose.connection 
    .on("error",(error) => {if(error){console.log('DB not Connected')}})
    .once("open",() => {console.log('DB connected')});