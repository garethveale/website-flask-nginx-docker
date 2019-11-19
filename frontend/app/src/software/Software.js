import React from 'react';
import { PageHeading } from '../common/PageHeading';
import GitTable from './GitTable';
import BarChart from './BarChart';
import { Footer } from '../common/Footer';
import { Container, Divider, Grid, Header, List, Segment } from 'semantic-ui-react';

function Software() {   
    const textStyle = {
        fontWeight: '400',
        fontSize: '0.8em',
        color: 'black'
      };
    
    const subStyle = {
        fontWeight: '600',
        fontSize: '0.8em',
        color: 'black'
      };
    return (
    <div style={{ height: '100vh' }}>
        <PageHeading title='Software' />

        <GitTable />

            <Segment style={{ backgroundColor: '#f2f2f2' }} textAlign='center'>
                <Header as='h3' style={{ color: 'black' }}>Website Tech Stack</Header>
                <p style={subStyle}>Scalable containerised web architecture for hosting multiple applications</p>
                <Divider />
                <Grid columns={6} stackable style={{ padding: '2em' }}>
                    <Grid.Row >
                        <Grid.Column textAlign='left'>
                            <Header as='h6' style={{ color: 'black' }}>Front end</Header>
                            <p style={subStyle}>REACT</p>
                            <List as='ul'> 
                                <List.Item as='li' style={textStyle}>Single page React web application</List.Item> 
                                <List.Item as='li' style={textStyle}>Semantic UI React, React bootstrap and custom components</List.Item>       
                            </List>
                        </Grid.Column>
                        <Grid.Column textAlign='left'>
                            <Header as='h6' style={{ color: 'black' }}>Web server</Header>
                            <p style={subStyle}>NGINX</p>
                            <List as='ul'>
                                <List.Item as='li' style={textStyle}>Nginx container proxy for handling incoming connections and requests</List.Item>
                                <List.Item as='li' style={textStyle}>Connects each container to each other</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column textAlign='left'>
                            <Header as='h6' style={{ color: 'black' }}>Web app</Header>
                            <p style={subStyle}>FLASK</p>
                            <List as='ul'>
                                <List.Item as='li' style={textStyle}>Python flask applicationa and API's for defining data models and processing requests</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column textAlign='left'>
                            <Header as='h6' style={{ color: 'black' }}>WSGI server</Header>
                            <p style={subStyle}>GUNICORN</p>
                            <List as='ul'>
                                <List.Item as='li' style={textStyle}>Interface serving flask application</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column textAlign='left'>
                            <Header as='h6' style={{ color: 'black' }}>Database</Header>
                            <p style={subStyle}>POSTGRES</p>
                            <List as='ul'>
                                <List.Item as='li' style={textStyle}>SQLAlchemy ORM for translating python objects to relational data</List.Item>
                                <List.Item as='li' style={textStyle}>PostgreSQL database for storing blog posts and JWT tokens etc</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column textAlign='left'>
                            <Header as='h6' style={{ color: 'black' }}>Deployment</Header>
                            <List as='ul'>
                                <List.Item as='li' style={textStyle}>Docker containers for each microservice</List.Item>
                                <List.Item as='li' style={textStyle}>Platform for hosting multiple web applications, each in it's own container</List.Item>
                            </List>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
        </Segment>

            
        <Container style={{ margin:'2em' }} textAlign='center'>
            <Grid container stackable >
                <Grid.Row>
                <Grid.Column width={6} textAlign='center'>
                    <Header as='h6' style={{}}>Software Engineering</Header>
                    <BarChart />
                </Grid.Column>
                <Grid.Column floated='right' width={6} textAlign='left'>
                    <Header as='h6' style={{ textAlign:'center' }}>Future Ventures (teach myself)</Header>
                    <List as='ul'> 
                        <List.Item style={textStyle}>Low level programming</List.Item> 
                        <List.Item style={textStyle}>C++</List.Item>             
                        <List.Item style={textStyle}>Large data sets/Time series data</List.Item>       
                        <List.Item style={textStyle}>Blockchain</List.Item> 
                        <List.Item style={textStyle}>Machine Learning</List.Item>    
                        <List.Item style={textStyle}>Scalable distributed systems (infrastructure, networks, microservices)</List.Item>
                        <List.Item style={textStyle}>Business</List.Item>  
                    </List>
                </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
      <Footer />
    </div>
    )
  }

export default Software;