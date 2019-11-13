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

  console.log(posts);

  return (
  <div style={{ height: '100vh' }}>
    <PageHeading title='Notes' color='light' navColor='dark' />
    <Container>
      <Grid columns={4} stackable style={{ padding:'2em' }}>

        {posts.map(post => {
          return (
            <Grid.Column key={post.id}>
                <Thumbnail />
            </Grid.Column>
            )
        })}

      </Grid>
      </Container>
  </div>
    );
  }

export default Posts;