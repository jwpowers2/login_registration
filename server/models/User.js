let mongoose = require('mongoose');

mongoose.model('User', new mongoose.Schema({

  name:{type: String, required:true, minlength:2, maxlength:255},
  email:{type: String, required:true, unique:true, minlength:2, maxlength:255},
  password:{type: String, required:true, minlength:2, maxlength:255}

},{timestamps: true}));
