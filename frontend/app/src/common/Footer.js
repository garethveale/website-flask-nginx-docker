import React from 'react';
import { Segment, Container, Grid, Icon, Header } from 'semantic-ui-react';

export const Footer = () => {
    return (
        <Segment vertical inverted style={{ padding: '5em 0em' }}>
            <Container>
                <Grid stackable textAlign='center'>
                <Grid.Row>
                    <Grid.Column centered>
                        <Header as='h3' inverted content='Gareth Veale' />
                        <Icon size='big' name='twitter' />
                        <Icon size='big' name='github' />
                        <Icon size='big' name='mail' />
                        <Icon size='big' name='youtube' />
                        <Icon size='big' name='twitch' />
                        <Icon size='big' name='linkedin' />
                    </Grid.Column>
                </Grid.Row>
                </Grid>
            </Container>
        </Segment>
    )
}