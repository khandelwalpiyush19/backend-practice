const mongoose = require("mongoose")
const config = require("config");
const dbgr = require("debug")("development:mongoose");
mongoose
.connect(`${config.get("MONGODB_URI")}/humble`)
.then(function(){
    //dbgr usre karan hai idhar
  dbgr("connected");
})
.catch(function(err){
    dbgr(err);
});

module.exports = mongoose.connection;