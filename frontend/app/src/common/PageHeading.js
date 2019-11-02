import React from 'react';
import { Container, Header } from 'semantic-ui-react';
import { NavBar } from '../common/NavBar';
 
export const PageHeading = ({ title }) => (
    // TODO: Support smaller rendering when on mobile device
  <div style={{ backgroundColor: '#011627' }}>
    <NavBar color='light'/>
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
            color: '#FDFFFC',
          }}
      />    
    </Container>
  </div>
)