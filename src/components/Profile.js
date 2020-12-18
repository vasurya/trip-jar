const React = require("react");

function Profile(props){
    let username = props.match.params.username

    return <p>This is the profile for {username}</p>
}

export default Profile;