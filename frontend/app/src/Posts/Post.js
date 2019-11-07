import React from 'react';
import { PageHeading } from '../common/PageHeading';
import { Container, Divider } from 'semantic-ui-react';

function Post({ props }) {   
    return (
    <div style={{ height: '100vh' }}>
      <PageHeading title='Post Detail Page' color='light' navColor='dark' />
      <Container>
        <Divider />

      </Container>
    </div>
      );
    }
  
  export default Post;