const express = require('express');

const router = express.Router();
const User = require('../models/User');
const { validationResult } = require('express-validator');

const { body} = require('express-validator');

//create a user using : POST "/api/auth/createuser" Doesnt require Auth
router.get ('/createuser',[
  body('name','Enter a valid name').isLength({ min : 3}),
  body('email','Enter a valid email').isEmail(),
  body('password','Password must have 5 characters atleast').isLength({ min : 5}),
  
] , async(req,res)=>{
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({errors : errors.array() });
  }

  //check whether the user with this email exists
  let user = await User.findOne({email: req.body.email})
  if (user){
    return res.status(400).json({error: "Sorry a user with this email already exists"})
  }
   user =await User.create({
    name: req.body.name,
    password: req.body.password,
    email: req.body.email
  })
  
  // .then(user=> res.json(user))
  // .catch(err=>{console.log(err)
  // res.json({error: 'Please enter a unique value'})
  res.json({"nice":"nice"})
});


  // res.send(req.body);


module.exports=router
