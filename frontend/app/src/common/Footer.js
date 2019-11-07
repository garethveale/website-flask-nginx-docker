import React from 'react';
import { Segment, Container, Grid, Icon, Header } from 'semantic-ui-react';

export const Footer = () => {
    return (
        <Segment vertical inverted style={{ padding: '5em 0em', backgroundColor:'#011627' }}>
            <Container>
                <Grid stackable textAlign='center'>
                <Grid.Row>
                    <Grid.Column>
                        <Header as='h3' inverted content='Gareth Veale' style={{color:'#FDFFFC'}} />
                        <a href='https://twitter.com/garethveale' target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}><Icon size='big' name='twitter' link style={{color:'#FDFFFC'}}></Icon></a>
                        <a href='https://github.com/garethiv' target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>  <Icon size='big' name='github' link style={{color:'#FDFFFC'}} /></a>
                        <a href='/contact' style={{ textDecoration: 'none' }}>  <Icon size='big' name='mail' link style={{color:'#FDFFFC'}} /></a>
                        <a href='https://www.youtube.com/channel/UCN71dsoRmbKXWWihXB2VOqw/featured?view_as=subscriber' target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>  <Icon size='big' name='youtube' link style={{color:'#FDFFFC'}} /></a>
                        <a href='https://www.twitch.tv/garethv' target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>  <Icon size='big' name='twitch' link style={{color:'#FDFFFC'}} /></a>
                        <a href='https://www.linkedin.com/in/garethveale/' target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>  <Icon size='big' name='linkedin' link style={{color:'#FDFFFC'}} /></a>
                    </Grid.Column>
                </Grid.Row>
                </Grid>
            </Container>
        </Segment>
    )
}