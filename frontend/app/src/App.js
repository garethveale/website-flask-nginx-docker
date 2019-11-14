import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home2 from './home/Home2';
import Contact from './contact/Contact';
import Software from './software/Software';
import NotFound from './common/NotFound'

function App() {
return (
    <Router>
      <div className="App">
          <Switch>
              <Route exact path="/" component={Home2} />
              <Route path="/contact" component={Contact} />
              <Route path="/software" component={Software} />
              <Route component={NotFound} />
          </Switch>
      </div>
    </Router>

  );
}
export default App;
