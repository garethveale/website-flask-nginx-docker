import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import { NavBar } from '../common/NavBar';
 
export const PageHeading = ({ title, color, navColor }) => (
    // TODO: Support smaller rendering when on mobile device
  <div style={{ backgroundColor: color === 'light' ? 'white' : '#011627', }}>
    <NavBar color={navColor}/>
    <Container  textAlign='center' style={{ height: '15vh', }} >
      <Header
          as='h1'
          content={title}
          textAlign='center'
          style={{
            fontSize: '2em',
            fontWeight: 'bold',
            marginBottom: '0.2em',
            marginTop: '1em',
            color: color === 'light' ? 'black' : '#FDFFFC',
          }}
      />    
    </Container>
  </div>
)