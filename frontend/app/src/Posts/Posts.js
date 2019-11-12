import _ from 'lodash'
import React, { useEffect, useState} from 'react';
import { PageHeading } from '../common/PageHeading';
import { Container, Grid } from 'semantic-ui-react';
import { Thumbnail } from '../common/Thumbnail';

function Posts() {   
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('/posts').then(response => 
      response.json().then(data => {
        setPosts(data.posts);
      })
    );
  }, []);

  const columns = _.times(4, (i) => (
    <Grid.Column key={i}>
      <Thumbnail />
    </Grid.Column>
  ))

/**            {posts.slice(0,3).map(post => {
                return (
                  <Grid.Column >
                    <Thumbnail />
                  </Grid.Column>
                )
            })}
  */

  console.log(posts);

  return (
  <div style={{ height: '100vh' }}>
    <PageHeading title='Notes' color='light' navColor='dark' />
    <Container>
      <Grid columns={4} stackable container style={{ padding:'2em' }}>
            <Grid.Row >
              {columns}
            </Grid.Row>
            <Grid.Row >
              {columns}
            </Grid.Row>
        </Grid>
      </Container>
  </div>
    );
  }

export default Posts;