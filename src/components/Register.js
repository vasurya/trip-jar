import { useState } from "react";
import { useHistory } from "react-router-dom";
import Profile from "./Profile";
import "./Register.css";
const React = require("react");
const axios = require("axios");

function Register() {
  const history = useHistory();
  const [register, setRegister] = useState(false);
  const [show, setShow] = useState("none");
  const [buttonText, setbuttonText] = useState("Login");
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const [conpass, setConPass] = useState("");

  function manageRegister() {
    setRegister((preValue) => {
      return !preValue;
    });
    if (register === true) {
      setShow("none");
      setbuttonText("Login");
    } else {
      setShow("");
      setbuttonText("Register");
    }
  }

  function handleSubmit(event) {
    // alert(username + "+" + pass + "+" + conpass);
    if (register === true) {
      if (pass !== conpass) {
        alert("Password does not match!");
      } else {
        const userDetails = {
          username: username,
          password: pass,
        };
        axios
          .post("/user", userDetails)
          .then(function (response) {
            var parseObject = response.data;
            alert(parseObject);
          })
          .catch(function (error) {
            console.log(error);
          });

        // axios
        //   .get("/user")
        //   .then(function (response) {
        //     alert(response.data);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });
      }
    } else {
      // CHECK DETAILS WITH THE DATABASE AND REROUTE TO HOME PAGE IF SUCCESSFUL

      // history.push("/profile");
      const userDetails = {
        username: username,
        password: pass,
      };
      axios
        .post("/login", userDetails)
        .then(function (response) {
          var parseObject = response.data;
          // alert(parseObject);
          if (parseObject) {
            // <Profile />
            history.push("/profile/"+userDetails.username);
          }
          else{
            alert("Username or Password does not match")
            history.push("/register");
          }
        })
        .catch(function (error) {
          console.log(error);
        });
      // alert("LOfu");
    }
    event.preventDefault();
  }

  function handleChange(event) {
    // alert(event.target.id);
    if (event.target.id === "username") {
      setUsername(event.target.value);
    } else if (event.target.id === "password") {
      setPass(event.target.value);
    } else {
      setConPass(event.target.value);
    }
  }
  return (
    <div className="container ">
      <h2 className="login_h2">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <p>Username:</p>
          <input
            type="text"
            class="form-control"
            id="username"
            value={username}
            onChange={handleChange}
          ></input>
        </div>
        <div class="form-group">
          <p>Password:</p>
          <input
            type="password"
            class="form-control"
            id="password"
            value={pass}
            onChange={handleChange}
          ></input>
        </div>
        <div class="form-group" style={{ display: show }}>
          <p>Confirm Password</p>

          <input
            type="password"
            class="form-control"
            id="conpassword"
            value={conpass}
            onChange={handleChange}
          ></input>
        </div>

        <div class="checkbox">
          <input
            id="check_box"
            type="checkbox"
            value=""
            onClick={manageRegister}
          />
          <label for="check_box">New user?</label>
        </div>

        <button type="submit" className="btn btn-secondary btn-lg">
          {buttonText}
        </button>
      </form>
    </div>
  );
}

export default Register;
