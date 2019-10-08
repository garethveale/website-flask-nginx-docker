import React, { useEffect, useState} from 'react';
import './App.css';
import { Posts } from './components/Posts';
import HomepageLayout from './components/HomepageLayout';
import { Container } from 'semantic-ui-react';

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
    <HomepageLayout />
  </div>
);
}

export default App;
