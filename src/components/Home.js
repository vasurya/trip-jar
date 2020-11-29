import posts from "../posts";
const React = require("react")

function Home(){
    return <ol>
        {posts.map(function(post){
            return <li><ul>
            <li>{post.title}</li>
            <li>{post.location}</li>
            <li>{post.date}</li>
            <li>{post.Description}</li>
            <li>{post.Rating}</li>
            </ul></li>
        })}
    </ol>
}

export default Home;