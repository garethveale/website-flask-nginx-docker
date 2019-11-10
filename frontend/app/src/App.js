import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home2 from './home/Home2';
import Posts from './posts/Posts';
import Contact from './contact/Contact';
import Software from './software/Software';
import Post from './posts/Post';
import StickyLayout from './posts/PostDetailExample';
import About from './about/About';
import Notfound from './common/NotFound'

function App() {
return (
    <Router>
      <div className="App">
          <Switch>
              <Route exact path="/" component={Home2} />
              <Route path="/posts" component={Posts} />
              <Route path="/post/:slug" component={Post} />
              <Route path="/posteg" component={StickyLayout} />
              <Route path="/contact" component={Contact} />
              <Route path="/software" component={Software} />
              <Route path="/about" component={About} />
              <Route component={Notfound} />
          </Switch>
      </div>
    </Router>

  );
}

export default App;
