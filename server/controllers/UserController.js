let User = require("mongoose").model("User");
let bcrypt = require("bcrypt-as-promised");

class UserController{
  
  index(req,res){

    User.find({},(err,users)=>{
      
      if (err){
        res.redirect("/");
      } else {
      
        res.render("index",{users:users});
      }
    })
  }
  login(req,res){

    // see if there is a matching email, hash inbound password and see if it matches the one with that email in DB
    User.findOne({email:req.body.email}, (err,user)=>{

      if (err){
        res.redirect("/");
      } else {

        // I found a matching email, now hash password 
        bcrypt.compare(req.body.password, user.password)
        .then((result)=>{
          console.log("good password");
          res.redirect("/");
        })
        .catch(()=>{
          console.log(err);
        })
      }

    })
   
  }
  register(req,res){

    let user = new User(req.body);
    bcrypt.hash(user.password, 10)
    .then(hashed_password => {
      user.password = hashed_password;
      user.save((err)=>{
        if (err){
          res.render("index",{errors:user.errors});
        } else {
          res.redirect("/");
        }
      })
    })
    .catch((err)=>{
      console.log(err);
    })
   
  }
}

module.exports = new UserController();
