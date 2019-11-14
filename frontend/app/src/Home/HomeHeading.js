import React from 'react';
import { Container, Header, Grid, Icon, Form, Segment } from 'semantic-ui-react';
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
                content='Gareth Veale.'
                textAlign='center'
                style={{
                  fontSize: '2em',
                  fontWeight: 'bold',
                  marginBottom: '0.2em',
                  padding: '0em',
                  color: '#FDFFFC',
                }}
            />           
            <p style={textStyle}>Self learning software engineer. I like building things, solving problems, and gaining knowledge. 
            Technology, Business, and Economics. Student of philosophy/life. Pushing myself daily.
            Check out my <b><a href='/software' style={linkStyle}>software</a></b>.</p>
            
            <Container textAlign='center' style={{ paddingTop: '1em' }}>
              <a href='https://twitter.com/garethveale' target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}><Icon size='big' name='twitter' link style={{color:'#FDFFFC'}}></Icon></a>
              <a href='https://github.com/garethiv' target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>  <Icon size='big' name='github' link style={{color:'#FDFFFC'}} /></a>
              <a href='/contact' style={{ textDecoration: 'none' }}>  <Icon size='big' name='mail' link style={{color:'#FDFFFC'}} /></a>
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