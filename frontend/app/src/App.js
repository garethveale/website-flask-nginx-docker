import React, { useEffect, useState} from 'react';
import './App.css';
import { Posts } from './components/Posts';
import ResponsiveContainer from './components/ResponsiveContainer';
import { HomepageHeading } from './components/HomepageHeading';
import { NavBar } from './components/NavBar';
import { Segment, Grid, Header } from 'semantic-ui-react';
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
      {/*Home page*/}
      <NavBar />
      <HomepageHeading />
      <Segment style={{ padding: '0em' }} vertical>
      <Grid celled='internally' columns='equal' stackable>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
              <Header as='h3' style={{ fontSize: '2em' }}>
                Introduction
              </Header>
              <p style={{ fontSize: '1.33em' }}>
                <b>Hi</b> bla bla bla
              </p>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row textAlign='center'>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "What a Company"
            </Header>
            <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
          </Grid.Column>
          <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              "I shouldn't have gone with their competitor."
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              <b>Nan</b> Chief Fun Officer Acme Toys
            </p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    {/*End of home page*/}
    </ResponsiveContainer>
  </div>
);
}

export default App;
