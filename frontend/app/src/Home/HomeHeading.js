import React from 'react';
import { NavBar } from '../common/NavBar';
import { Container, Header, Grid, Image, Icon, Form, Segment } from 'semantic-ui-react';
// TODO: Pass mobile down as props

export const HomeHeading = ({ mobile }) => {
    const textStyle = {
        color: '#FDFFFC',
        marginTop:'0.5em',
      };
    const linkStyle = {
        color: '#FF9F1C',
        textDecoration: 'none'
    }
    return (

    <Grid textAlign='center' style={{ height: '80vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 500 }}>
      <Form size='large'>
        <Segment stacked textAlign='center'  style={{ backgroundColor: '#011627' }} >
            <Header
                as='h1'
                content='Hello, my name is Gareth Veale.'
                textAlign='center'
                style={{
                  fontSize: '2em',
                  fontWeight: 'bold',
                  marginBottom: '0.2em',
                  padding: '0em',
                  color: '#FDFFFC',
                }}
            />           
            <p style={textStyle}>I'm a self learning software engineer. I enjoy building things, solving problems, and am hungry for knowledge. 
            I'm interested in business, self-improvement, finance and macroeconomics. Student of philosophy and life. Pushing myself daily.
            Feel free to <b><a href='/about' style={linkStyle}>read more </a></b>
            about me. Check out my <b><a href='/software' style={linkStyle}>software projects</a></b>. 
            Or read my <b><a href='/posts' style={linkStyle}>blog posts.</a></b></p>
            
            <Container textAlign='center' style={{ paddingTop: '1em' }}>
              <a href='https://twitter.com/garethveale' target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}><Icon size='big' name='twitter' link style={{color:'#FDFFFC'}}></Icon></a>
              <a href='https://github.com/garethiv' target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>  <Icon size='big' name='github' link style={{color:'#FDFFFC'}} /></a>
              <a href='' target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>  <Icon size='big' name='mail' link style={{color:'#FDFFFC'}} /></a>
              <a href='https://www.youtube.com/channel/UCN71dsoRmbKXWWihXB2VOqw/featured?view_as=subscriber' target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>  <Icon size='big' name='youtube' link style={{color:'#FDFFFC'}} /></a>
              <a href='https://www.twitch.tv/garethv' target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>  <Icon size='big' name='twitch' link style={{color:'#FDFFFC'}} /></a>
              <a href='https://www.linkedin.com/in/garethveale/' target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>  <Icon size='big' name='linkedin' link style={{color:'#FDFFFC'}} /></a>
            </Container>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
)
}
/*<Header
                as='h4'
                content='Full-time flaneur: Philosophy, Business, Finance.'
                textAlign='center'
                style={{
                  fontSize: '1em',
                  fontWeight: 'normal',
                  margin: '0em',
                  color: '#FDFFFC'
                }}
            />*/