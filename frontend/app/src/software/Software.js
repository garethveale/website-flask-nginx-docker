import React from 'react';
import { PageHeading } from '../common/PageHeading';
import AnotherGridLayout from '../common/AnotherGridLayout';
import { NavBar } from '../common/NavBar';
import { Container, Divider } from 'semantic-ui-react';

class Software extends React.Component {
  render() {
    return (
    <div style={{ backgroundColor: '#011627', height: '100vh' }}>
      <NavBar color='light'/>
      <PageHeading title='Software' />


    </div>
    )
  }
}

export default Software;
//      <AnotherGridLayout />