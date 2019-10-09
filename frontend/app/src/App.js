import React, { useEffect, useState} from 'react';
import './App.css';
import { Posts } from './components/Posts';
import ResponsiveContainer from './components/ResponsiveContainer';
import { HomepageHeading } from './components/HomepageHeading';
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
    <ResponsiveContainer>
      <HomepageHeading />
    </ResponsiveContainer>
  </div>
);
}

export default App;
