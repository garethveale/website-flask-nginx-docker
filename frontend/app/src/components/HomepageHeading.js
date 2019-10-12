import React from 'react';
import { Container, Header, Segment } from 'semantic-ui-react';
/* eslint-disable react/no-multi-comp */
/**  Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.*/
 
export const HomepageHeading = ({ mobile }) => (
    <Container>
      <Header
        as='h3'
        content='Gareth Veale'
        inverted
        style={{
          fontSize: mobile ? '1em' : '2em',
          fontWeight: 'normal',
          marginBottom: 0,
          marginTop: mobile ? '1em' : '2em',
          color: 'black'
        }}
      />
      <Header
        as='h4'
        content='Software Engineer.'
        inverted
        style={{
          fontSize: mobile ? '0.5em' : '0.75em',
          fontWeight: 'normal',
          marginTop: mobile ? '0.5em' : '1.5em',
          color: 'black'
        }}
      />
    </Container>
)