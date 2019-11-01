import React from 'react';
import { NavBar } from '../common/NavBar';
import { AboutSection } from './AboutSection';
import { Container, Divider } from 'semantic-ui-react';

class About extends React.Component {
  render() {
    return (
    <div style={{ backgroundColor: '#011627', height: '100vh' }}>
      <NavBar color='light'/>
      <p style={{ color:'white' }}>TIMELINE WITH DARK BACKGROUND</p>
    </div>
    )
  }
}

export default About;