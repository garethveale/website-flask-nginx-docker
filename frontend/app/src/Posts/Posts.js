import React from 'react';
import { PageHeading } from '../common/PageHeading';
import AnotherGridLayout from '../common/AnotherGridLayout';
import { Container, Divider, Grid } from 'semantic-ui-react';

class Posts extends React.Component {
  render() {
    return (
    <Container>
      <PageHeading title='Posts' />
      <Divider />
      <AnotherGridLayout />
    </Container>
    )
  }
}

export default Posts;