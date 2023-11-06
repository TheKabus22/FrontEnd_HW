import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link, useParams } from "react-router-dom";

const AllPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>All Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const SinglePost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setPost(data))
      .catch((error) => console.error(error));
  }, [id]);

  if (!post) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

const NotFound = () => {
  return <h1>404 - Not Found</h1>;
};

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={AllPosts} />
        <Route path="/posts/:id" component={SinglePost} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
