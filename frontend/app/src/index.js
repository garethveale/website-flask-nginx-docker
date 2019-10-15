import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css'
import App from './App';
import * as serviceWorker from './serviceWorker';
import Posts from './posts/Posts';
import Books from './books/Books';
import Contact from './contact/Contact';
import Post from './posts/Post';
import Notfound from './common/NotFound'

const routing = (
    <Router>
      <div>
        <ul>
            <li>
            <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/posts">Posts</Link>
            </li>
            <li>
            <Link to="/books">Books</Link>
            </li>
            <li>
            <Link to="/contact">Contact</Link>
            </li>
        </ul>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/posts" component={Posts} />
            <Route path="/post/:slug" component={Post} />
            <Route path="/books" component={Books} />
            <Route path="/contact" component={Contact} />
            <Route component={Notfound} />
        </Switch>  
      </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
