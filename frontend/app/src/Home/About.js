import React from 'react';
import { Container, Grid, Header, Image } from 'semantic-ui-react';

export const About = () => {
    return (
            <Container textAlign='center' style={{
                margin: '3em'
            }}>
                <Header as='h3' centered>About Me</Header>
                <Grid columns={3} divided textAlign='center'>
                    <Grid.Row>
                    <Grid.Column>
                        <p>Software Engineering</p>
                        <p>-Python</p>
                    </Grid.Column>
                    <Grid.Column>
                        <p>Current Ventures</p>
                        <p>-Bullet points of learning</p>
                    </Grid.Column>
                    <Grid.Column>
                        <p>Achievements</p>
                        <p>-Bullet points of learning</p>
                    </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
    )
}