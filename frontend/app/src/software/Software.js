import React from 'react';
import { PageHeading } from '../common/PageHeading';
import GitTable from './GitTable';
import BarChart from './BarChart';
import { Footer } from '../common/Footer';
import { Container, Divider, Grid, Header, List } from 'semantic-ui-react';

class Software extends React.Component {
  render() {
    const textStyle = {
        fontWeight: '400',
        fontSize: '0.8em',
        color: 'black'
      };
    
    return (
    <div style={{ height: '100vh' }}>
        <PageHeading title='Software' />

        <Container style={{ margin:'2em' }} textAlign='center'>
            <Header as='h3' centered style={{ color: 'black' }}>Website Tech Stack</Header>
            <Divider />
            <Grid columns={6} stackable>
                <Grid.Row centered >
                    <Grid.Column textAlign='left'>
                        <Header as='h6' centered style={{ color: 'black' }}>Front end</Header>
                        <List as='ul'> 
                            <List.Item as='li' style={textStyle}>Single page React web application</List.Item> 
                            <List.Item as='li' style={textStyle}>Semantic UI React, React bootstrap and custom components</List.Item>       
                        </List>
                    </Grid.Column>
                    <Grid.Column textAlign='left'>
                        <Header as='h6' centered style={{ color: 'black' }}>Web server</Header>
                        <List as='ul'>
                            <List.Item as='li' style={textStyle}>Nginx proxy for handling incoming connections and requests</List.Item>
                            <List.Item as='li' style={textStyle}>Load balancing</List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column textAlign='left'>
                        <Header as='h6' centered style={{ color: 'black' }}>Web app</Header>
                        <List as='ul'>
                            <List.Item as='li' style={textStyle}>Python flask applicationa and API's for defining data models and processing requests</List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column textAlign='left'>
                        <Header as='h6' centered style={{ color: 'black' }}>WSGI server</Header>
                        <List as='ul'>
                            <List.Item as='li' style={textStyle}>Gunicorn interface serving flask application</List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column textAlign='left'>
                        <Header as='h6' centered style={{ color: 'black' }}>Database</Header>
                        <List as='ul'>
                            <List.Item as='li' style={textStyle}>SQLAlchemy ORM for translating python objects to relational data</List.Item>
                            <List.Item as='li' style={textStyle}>PostgreSQL database</List.Item>
                        </List>
                    </Grid.Column>
                    <Grid.Column textAlign='left'>
                        <Header as='h6' centered style={{ color: 'black' }}>Deployment</Header>
                        <List as='ul'>
                            <List.Item as='li' style={textStyle}>UNKNOWN</List.Item>
                        </List>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
      </Container>
      
        <GitTable />
            
        <Container style={{ margin:'2em' }} textAlign='center'>
            <Grid container stackable >
                <Grid.Row>
                <Grid.Column width={6} textAlign='center'>
                    <Header as='h6' centered style={{}}>Software Engineering</Header>
                    <BarChart />
                </Grid.Column>
                <Grid.Column floated='right' width={6} textAlign='left'>
                    <Header as='h6' centered style={{ textAlign:'center' }}>Future Ventures (teach myself)</Header>
                    <List as='ul'> 
                        <List.Item as='li' style={textStyle}>Low level programming</List.Item> 
                        <List.Item as='li' style={textStyle}>C++</List.Item>             
                        <List.Item as='li' style={textStyle}>Large data sets/Time series data</List.Item>       
                        <List.Item as='li' style={textStyle}>Blockchain</List.Item> 
                        <List.Item as='li' style={textStyle}>Machine Learning</List.Item>    
                        <List.Item as='li' style={textStyle}>Scalable distributed systems (infrastructure, networks, microservices)</List.Item>
                        <List.Item as='li' style={textStyle}>Business</List.Item>  
                    </List>
                </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
      <Footer />
    </div>
    )
  }
}

export default Software;
//      <AnotherGridLayout />
/*
<Header as='h3'>My Work</Header>
            <Grid container stackable verticalAlign='middle'>
                <Grid.Row>
                <Grid.Column width={8}>
                    <Header as='h6' centered style={{ color: 'black' }}>Software Engineering</Header>
                    <List as='ul'> 
                        <List.Item as='li' style={textStyle}>Python</List.Item> 
                        <List.Item as='li' style={textStyle}>React</List.Item>       
                    </List>
                </Grid.Column>
                <Grid.Column floated='right' width={6}>
                    <Header as='h6' centered style={{ color: 'black' }}>Current Ventures</Header>
                    <List as='ul'> 
                        <List.Item as='li' style={textStyle}>Single page React web application</List.Item> 
                        <List.Item as='li' style={textStyle}>Semantic UI React, React bootstrap and custom components</List.Item>       
                    </List>
                </Grid.Column>
                </Grid.Row>
            </Grid>


                    <List as='ul'> 
                        <List.Item as='li' style={textStyle}>Python</List.Item> 
                        <List.Item as='li' style={textStyle}>Javascript</List.Item>             
                        <List.Item as='li' style={textStyle}>React</List.Item>       
                        <List.Item as='li' style={textStyle}>Java</List.Item> 
                        <List.Item as='li' style={textStyle}>Pandas</List.Item>    
                        <List.Item as='li' style={textStyle}>SQL</List.Item> 
                        <List.Item as='li' style={textStyle}>Linux</List.Item> 
                    </List>

            */