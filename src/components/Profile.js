import Axios from "axios";
import { useHistory } from "react-router-dom";

const React = require("react");

function Profile(props) {
  let username = props.match.params.username;
  const history = useHistory();

  function handleClick(){
    //   Redirect to custom compose link /:username/compose
    history.push("/"+username+"/compose");
  }
  return (
    <div>
      <p>This is the profile for {username}</p>
      <button type="button" onClick={handleClick}>Compose</button> 
    </div>
  );
}

export default Profile;
