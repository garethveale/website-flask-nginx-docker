import React from 'react';
import { Segment, Container, Grid, Icon, Header, Image } from 'semantic-ui-react';

export const Footer = ( { color } ) => {
    const subStyle = {
        fontWeight: '600',
        fontSize: '0.8em',
        color: '#011627',
        marginTop: '0.5em'
      };
    const linkStyle = {
        color: '#FF9F1C',
        textDecoration: 'none',
    }
    return (
        
        // <Segment vertical inverted style={{ backgroundColor:color, marginTop:'2em' }}>
        //     <Container>
        //         <Grid stackable textAlign='center'>
        //         <Grid.Row>
        //             <Grid.Column>
        //                 <Header as='h3' inverted content='Gareth Veale' style={{color:'#011627', fontWeight: '900'}} />
        //                 <a href='https://twitter.com/garethveale' target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}><Icon size='big' name='twitter' link style={{color:'#011627'}}></Icon></a>
        //                 <a href='https://github.com/garethiv' target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>  <Icon size='big' name='github' link style={{color:'#011627'}} /></a>
        //                 <a href='/contact' style={{ textDecoration: 'none' }}>  <Icon size='big' name='mail' link style={{color:'#011627'}} /></a>
        //                 <a href='https://www.youtube.com/channel/UCN71dsoRmbKXWWihXB2VOqw/featured?view_as=subscriber' target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>  <Icon size='big' name='youtube' link style={{color:'#011627'}} /></a>
        //                 <a href='https://www.twitch.tv/garethv' target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>  <Icon size='big' name='twitch' link style={{color:'#011627'}} /></a>
        //                 <a href='https://www.linkedin.com/in/garethveale/' target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>  <Icon size='big' name='linkedin' link style={{color:'#011627'}} /></a>
        //             </Grid.Column>
        //         </Grid.Row>
        //         </Grid>
        //     </Container>
        // </Segment>

        <div>
            <Container textAlign='left' style={{ marginTop: '0em' }}>
                    {/* <Image src='portrait.jpg' size='tiny' circular verticalAlign='middle'/> */}
                    {/* <span style={subStyle}>Personal website of <b><u><a href='/' style={linkStyle}>Gareth Veale.</a></u></b></span> */}
                    <p style={subStyle}>← Personal website of <b><u><a href='/' style={linkStyle}>Gareth Veale.</a></u></b></p>
            </Container>

        </div>
    )
}