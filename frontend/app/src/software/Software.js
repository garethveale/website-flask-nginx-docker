import React from 'react';
import { PageHeading } from '../common/PageHeading';
import AnotherGridLayout from '../common/AnotherGridLayout';
import { Container, Divider } from 'semantic-ui-react';

class Software extends React.Component {
  render() {
    return (
    <Container>
      <PageHeading title='Software' />
      <Divider />
      <AnotherGridLayout />
    </Container>
    )
  }
}

export default Software;