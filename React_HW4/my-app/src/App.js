import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AllPosts from './components/AllPosts';
import SinglePost from './components/SinglePost';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={AllPosts} />
        <Route path="/post/:id" component={SinglePost} />
        <Route component={() => <div>404 Not Found</div>} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
