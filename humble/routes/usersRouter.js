const express = require("express");
const userModel = require("../models/user-model");
const router = express.Router();


router.get("/",function(req,res){
    res.send("its working");
});

router.post("/register", function(req,res){
try{
    let { email, password, fullname} = req.body;

    let user = await userModel.create({
        email,
        password,
        fullname,
    });

    res.send(user);
}catch(err){
      res.send(err.message);
}   
});
module.exports = router;