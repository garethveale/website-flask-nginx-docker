import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import { NavBar } from '../common/NavBar';
 
export const PageHeading = ({ title, color, navColor, headHeight, margin }) => (
    // TODO: Support smaller rendering when on mobile device
  <div style={{ backgroundColor: color === 'light' ? 'white' : '#011627', }}>
    <NavBar color={navColor}/>
    <Container  textAlign='center' style={{ 
      height: headHeight === 'small' ? '1vh' : '15vh',
      marginBottom: margin === 'large' ? '8em' : '0.2em', 
      }} >
      <Header
          as='h1'
          content={title}
          textAlign='center'
          style={{
            fontSize: '2em',
            fontWeight: 'bold',
            marginBottom: '1em',
            marginTop: '1em',
            color: color === 'light' ? 'black' : '#FDFFFC',
          }}
      />
    </Container>
  </div>
)