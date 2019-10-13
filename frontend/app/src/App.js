import React, { useEffect, useState} from 'react';
import './App.css';
import { Posts } from './Posts/PostList';
import ResponsiveContainer from './components/ResponsiveContainer';
import Home from './Home/Home';
import { NavBar } from './components/NavBar';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

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
  <div className="App">
    <ResponsiveContainer>
      <NavBar />
      <Home />
      <div>
        <ul>
            <Link to='/posts'>Posts</Link>
        </ul>
      </div>
    </ResponsiveContainer>
  </div>
);
}

export default App;
