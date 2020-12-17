const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

mongoose.connect("mongodb://localhost/userDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error"));

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

const app = express();
app.use(express.static(path.join(__dirname, "build")));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/user", function (req, res) {
  res.send("working");
  console.log("Working");
});

app.post("/user", function (req, res) {
  // console.log(JSON.stringify(req.body));
  var plainTxtPass = req.body.password;
  bcrypt.hash(plainTxtPass, 10, function (error, hash) {
    var newUser = new User({
      username: req.body.username,
      password: hash,
    });
    newUser.save(function (err) {
      if (err) {
        console.error(err);
      } else {
        console.log("Saved");
        res.send("Successfully Added item");
      }
    });
  });
});

app.post("/login",function(req,res){
  var plainTxtPass = req.body.password;
 
    User.findOne({username: req.body.username}, function(err,user){
      if(err){
        console.log(err);
      }
      else{
        console.log(user.password);
        // console.log();
        // console.log("Found user"+user);
        bcrypt.compare(plainTxtPass,user.password,function(err,result){
          console.log(result);
          res.send(result);
        })
      }
    })

 
})
app.listen(process.env.PORT || 8080, function (req, res) {
  console.log("Listening on port 8080");
});
