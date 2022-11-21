import axios from "axios";
import React from "react";

const baseURL = "https://jsonplaceholder.typicode.com/posts";

export default function App() {
  const [post, setPost] = React.useState(null)
  
  React.useEffect(() => {
    axios.get(`${url}/1`)
    .then((response) => {
      setPost(response.data)
    })
  },[]) 

  const deletePost = () => {
    axios.delete(`${url}/1`)
    .then(() => {
      alert('deleted post')
      setPost(null)
    })
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <button onClick={deletePost}>delete post</button>
    </div>
  )
}