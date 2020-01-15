import React from 'react';
import { HomeHeading } from './HomeHeading';
import { NavBar } from '../common/NavBar';

class Home2 extends React.Component {
  //'#011627'
    render() {
      return (
        <div style={{ backgroundColor: 'white', height: '100vh' }}>
            <NavBar color='light' color='dark' />
            <HomeHeading />
        </div>
      )
    }
}

export default Home2;