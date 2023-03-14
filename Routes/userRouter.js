const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const userSchema = require("../Scheama/userSchema");
const User = new mongoose.model("User", userSchema);

router.post("/addUser", async (req, res) => {
  const newUser = new User(req.body);
  console.log(newUser, "..................");
  const result = await User.create(newUser);
  console.log(result);
  if (result) {
    res.send({ success: true, data: result });
  } else {
    res.send({ error: "had a error in code" });
  }
});



// router.get("/", async (req, res) => {
  
//   //   res.send({name:"zinku",email:"sarwarasink@gmail.com"})
//   //   console.log("searching".red);
//   User.find({}, (error, result) => {
//     if (error) {
//       res.status(501).send({ message: "Had a error from server" });
//     } else {
//       res.status(200).send(result);
//     }
//   });
// });

module.exports = router;
