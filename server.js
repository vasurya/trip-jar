const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

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
  var newUser = {
    username: req.body.username,
    password: req.body.password,
  };
  console.log(newUser);
  res.send("Successfully added");
});

app.listen(process.env.PORT || 8080, function (req, res) {
  console.log("Listening on port 8080");
});
