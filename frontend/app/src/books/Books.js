import React from 'react';
import { PageHeading } from '../common/PageHeading';
import AnotherGridLayout from '../common/AnotherGridLayout';
import { Container, Divider, Grid } from 'semantic-ui-react';

class Books extends React.Component {
  render() {
    return (
      <Container>
        <PageHeading title='Book Notes' />
        <Divider />
        <AnotherGridLayout />
      </Container>
    )
  }
}
export default Books;