import React from 'react';
import { NavBar } from '../common/NavBar';
import { Container, Header, Grid, Image, Icon, Form, Segment } from 'semantic-ui-react';
// TODO: Pass mobile down as props

export const HomeHeading = ({ mobile }) => {
    const textStyle = {
        color: '#FDFFFC',
        marginTop:'0.5em'
      };
    const boldStyle = {
        color: '#FF9F1C',
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
            <p style={textStyle}>I'm a self learning software engineer. I enjoy building things, solving problems, and am hungry for knowledge. I'm interested in business, self-improvement, finance and macroeconomics. Student of philosophy and life. Pushing myself daily.
            Feel free to <b style={boldStyle}>read more</b> about me. Check out my <b style={boldStyle}>software projects</b>. Or read my <b style={boldStyle}>blog posts.</b></p>
            <Container textAlign='center' style={{ paddingTop: '1em' }}>
                <Icon size='big' name='twitter' style={{color:'#FDFFFC'}} />
                <Icon size='big' name='github' style={{color:'#FDFFFC'}} />
                <Icon size='big' name='mail' style={{color:'#FDFFFC'}} />
                <Icon size='big' name='youtube' style={{color:'#FDFFFC'}} />
                <Icon size='big' name='twitch' style={{color:'#FDFFFC'}} />
                <Icon size='big' name='linkedin' style={{color:'#FDFFFC'}} />
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