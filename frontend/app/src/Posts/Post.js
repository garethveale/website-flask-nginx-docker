import React from 'react';
import { PageHeading } from '../common/PageHeading';
import { Container } from 'semantic-ui-react';
import { Footer } from '../common/Footer';

class Post extends React.Component {
  render() {
    return (
    <div style={{ height: '100vh' }}>
      <PageHeading title='Post' />
      <Container
            style ={{ 
            paddingTop: '2em',
            paddingBottom: '2em'
            }}
        >
        </Container>
        <Footer />
    </div>
    )
  }
}

export default Post;