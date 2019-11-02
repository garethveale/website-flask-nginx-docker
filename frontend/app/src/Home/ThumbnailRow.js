import React from 'react';
import { Header, Container, Grid } from 'semantic-ui-react';
import { Thumbnail } from '../common/Thumbnail';

export const ThumbnailRow = ({ posts }) => {
        {/*return (<List>
            {posts.map(post => {
                return (
                    <List.Item key={post.title}>
                        <Header>{post.title}</Header>
                    </List.Item>
                )
            })}
        </List>    )*/}
    return (
        <Container>
        <Grid columns={4} stackable>
            <Grid.Row >
                <Grid.Column >
                    <Thumbnail />
                </Grid.Column>
                <Grid.Column >
                    <Thumbnail />
                </Grid.Column>
                <Grid.Column >
                    <Thumbnail />
                </Grid.Column>
                <Grid.Column >
                    <Thumbnail />
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Container>
    )
}