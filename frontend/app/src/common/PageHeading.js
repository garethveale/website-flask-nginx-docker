import React from 'react';
import { Container, Header } from 'semantic-ui-react';
 
export const PageHeading = ({ title }) => (
    // TODO: Support smaller rendering when on mobile device
    <Container text>
      <Header
        as='h3'
        content={title}
        inverted
        style={{
          fontSize: '2em',
          fontWeight: 'normal',
          marginBottom: 0,
          marginTop: '2em',
          color: 'black'
        }}
      />
    </Container>
)