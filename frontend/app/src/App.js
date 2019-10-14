import React, { useEffect, useState} from 'react';
import { Posts } from './posts/PostList';
import ResponsiveContainer from './common/ResponsiveContainer';
import Home from './home/Home';
import { NavBar } from './common/NavBar';
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
    </ResponsiveContainer>
  </div>
);
}

export default App;
