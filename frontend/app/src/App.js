import React, {useEffect} from 'react';
import './App.css';
import { Posts } from './components/Posts'

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/posts').then(response => 
      response.json().then(data => {
        setPosts(data);
      })
    );
  }, []);

  console.log(posts);

  return (
    <div className="App">
      <Posts posts={posts}/>
    </div>
  );
}

export default App;
