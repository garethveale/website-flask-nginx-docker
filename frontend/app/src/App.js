import React, { useEffect, useState} from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import ResponsiveContainer from './common/ResponsiveContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './home/Home';
import Posts from './posts/Posts';
import Contact from './contact/Contact';
import Software from './software/Software';
import Post from './posts/Post';
import Notfound from './common/NotFound'

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/posts').then(response => 
      response.json().then(data => {
        setPosts(data.posts);
      })
    );
  }, []);

  console.log(posts);
    
  /**return (
    <div className="App">
      <Container>
        <Posts posts={ posts }/>
      </Container>    
    </div>
  );
}**/
return (
    <Router>
      <div className="App">
        <ResponsiveContainer>
          <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/posts" component={Posts} />
              <Route path="/post/:slug" component={Post} />
              <Route path="/contact" component={Contact} />
              <Route path="/software" component={Software} />
              <Route component={Notfound} />
          </Switch>
        </ResponsiveContainer>  
      </div>
    </Router>

  );
}

export default App;
