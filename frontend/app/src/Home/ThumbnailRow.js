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
        <Container
            style ={{ 
            paddingTop: '2em',
            paddingBottom: '2em'
            }}
        >
        <Header as='h3'>RECENT POSTS</Header>
        <Grid columns={4} stackable container style={{ padding:'3em' }}>
            <Grid.Row centered>
            <Grid.Column centered>
                <Thumbnail />
            </Grid.Column>
            <Grid.Column centered>
                <Thumbnail />
            </Grid.Column>
            <Grid.Column centered>
                <Thumbnail />
            </Grid.Column>
            <Grid.Column centered>
                <Thumbnail />
            </Grid.Column>
            </Grid.Row>
        </Grid>
    </Container>
    )
}