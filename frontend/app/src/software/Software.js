import React from 'react';
import { PageHeading } from '../common/PageHeading';
import GitTable from './GitTable';
import { NavBar } from '../common/NavBar';
import { Container, Grid, Header, List, Icon } from 'semantic-ui-react';

class Software extends React.Component {
  render() {
    const textStyle = {
        fontWeight: '400',
        fontSize: '0.8em',
        color: '#FDFFFC'
      };
    const subHeading = {
        fontWeight: '600',
        fontSize: '0.8em',
        color: '#FDFFFC'
    }
    return (
    <div style={{ backgroundColor: '#011627', height: '100vh' }}>
      <NavBar color='light'/>
      <PageHeading title='Software' />
      <p style={{ color:'white' }}>COLOURED TABLE FOR MY GIT COMMITS!</p>
      <GitTable />
      <Container text style={{ margin:'2em' }} textAlign='center'>
        <Header as='h3' centered style={{ color: '#FDFFFC' }}>WEBSITE TECH STACK</Header>
        <Grid columns={6} stackable textAlign='center'>
            <Grid.Row centered >
                      <Grid.Column textAlign='center'>
                          <Header as='h6' centered style={{ color: '#FDFFFC' }}>Front end</Header>
                          <List> 
                              <List.Item style={textStyle}>React</List.Item>    
                          </List>
                      </Grid.Column>
                      <Grid.Column textAlign='center'>
                          <Header as='h6' centered style={{ color: '#FDFFFC' }}>Back end web server</Header>
                          <List>
                              <List.Item style={textStyle}>Nginx</List.Item>
                          </List>
                      </Grid.Column>
                      <Grid.Column textAlign='center'>
                          <Header as='h6' centered style={{ color: '#FDFFFC' }}>Web application</Header>
                          <List>
                              <List.Item style={textStyle}>Flask</List.Item>
                          </List>
                      </Grid.Column>
                      <Grid.Column textAlign='center'>
                          <Header as='h6' centered style={{ color: '#FDFFFC' }}>WSGI application server</Header>
                          <List>
                              <List.Item style={textStyle}>Gunicorn</List.Item>
                          </List>
                      </Grid.Column>
                      <Grid.Column textAlign='center'>
                          <Header as='h6' centered style={{ color: '#FDFFFC' }}>Database</Header>
                          <List>
                              <List.Item style={textStyle}>PostgreSQL</List.Item>
                          </List>
                      </Grid.Column>
                      <Grid.Column textAlign='center'>
                          <Header as='h6' centered style={{ color: '#FDFFFC' }}>Deployment</Header>
                          <List>
                              <List.Item style={textStyle}>UNKNOWN</List.Item>
                          </List>
                      </Grid.Column>
                      </Grid.Row>
                  </Grid>
      </Container>
    </div>
    )
  }
}

export default Software;
//      <AnotherGridLayout />