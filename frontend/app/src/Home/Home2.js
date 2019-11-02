import React from 'react';
import { HomeHeading } from './HomeHeading';
import { NavBar } from '../common/NavBar';

class Home2 extends React.Component {
    render() {
      return (
        <div style={{ backgroundColor: '#011627', height: '100vh' }}>
            <NavBar color='light' />
            <HomeHeading />
        </div>
      )
    }
}

export default Home2;