import React from 'react';
import { Segment, Container, Grid, List, Header } from 'semantic-ui-react';

export const Footer = () => {
    return (

        <Segment vertical style={{ padding: '5em 0em' }}>
            <Container>
                <Grid stackable>
                <Grid.Row>
                    <Grid.Column width={3}>
                    <Header as='h4' content='Gareth Veale' />
                    </Grid.Column>
                    <Grid.Column width={7}>
                    <p>
                        Social Media icons
                    </p>
                    </Grid.Column>
                </Grid.Row>
                </Grid>
            </Container>
        </Segment>
    )
}