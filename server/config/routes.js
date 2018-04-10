
let UserController = require("../controllers/UserController.js");

module.exports = (app)=>{

  app.get("/",UserController.index);
  app.post("/login",UserController.login);
  app.post("/users",UserController.register);
  //app.get("/rabbit/edit/:id",RabbitController.edit_rabbit);
  //app.post("/rabbits",RabbitController.create_rabbit);
  //app.post("/rabbits/:id",RabbitController.mod_rabbit);
  //app.post("/rabbits/destroy/:id",RabbitController.destroy_rabbit);

}
