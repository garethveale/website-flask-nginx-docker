import React from 'react';
import { PageHeading } from '../common/PageHeading';
import { Footer } from '../common/Footer';
import { Time } from './Time';

class About extends React.Component {
  render() {
    return (
    <div style={{ height: '100vh' }}>
      <PageHeading title='About me' />
      <Time />
      <Footer />
    </div>
    )
  }
}

export default About;