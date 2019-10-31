import React from 'react';
import { Segment, Container, Grid, Icon, Header } from 'semantic-ui-react';

export const Footer = () => {
    return (
        <Segment vertical inverted style={{ padding: '5em 0em', backgroundColor:'#011627' }}>
            <Container>
                <Grid stackable textAlign='center'>
                <Grid.Row>
                    <Grid.Column centered>
                        <Header as='h3' inverted content='Gareth Veale' style={{color:'#FDFFFC'}} />
                        <Icon size='big' name='twitter' style={{color:'#FDFFFC'}} />
                        <Icon size='big' name='github' style={{color:'#FDFFFC'}} />
                        <Icon size='big' name='mail' style={{color:'#FDFFFC'}} />
                        <Icon size='big' name='youtube' style={{color:'#FDFFFC'}} />
                        <Icon size='big' name='twitch' style={{color:'#FDFFFC'}} />
                        <Icon size='big' name='linkedin' style={{color:'#FDFFFC'}} />
                    </Grid.Column>
                </Grid.Row>
                </Grid>
            </Container>
        </Segment>
    )
}