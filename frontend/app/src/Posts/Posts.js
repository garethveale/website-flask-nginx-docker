import React from 'react';
import { PageHeading } from '../common/PageHeading';
import { Container, Divider, Grid, Header } from 'semantic-ui-react';
import { Thumbnail } from '../common/Thumbnail';
import { Footer } from '../common/Footer';

class Posts extends React.Component {
  render() {
    return (
    <div style={{ height: '100vh' }}>
      <PageHeading title='Notes' />
      <Container
            style ={{ 
            paddingTop: '2em',
            paddingBottom: '2em'
            }}
        >
        <Header as='h3'>Posts</Header>
        <Divider />
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

        <Header as='h3'>Book notes</Header>
        <Divider />
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
        <Footer />
    </div>
    )
  }
}

export default Posts;