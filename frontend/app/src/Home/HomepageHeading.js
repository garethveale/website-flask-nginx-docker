import React from 'react';
import { Container, Header, Grid, Image, Icon } from 'semantic-ui-react';
 
// TODO: Pass mobile down as props

export const HomepageHeading = ({ mobile }) => (
    <Container 
      text
      style ={{ 
        paddingTop: '2em'
      }}
    >
      <Grid
        style={{
          borderWidth: '0',
        }}
      >
        <Grid.Row>
          <Grid.Column width={6}>
            <Image 
              src='https://react.semantic-ui.com/images/wireframe/square-image.png' 
              size='medium' 
              circular 
              centered
            />
          </Grid.Column>
          <Grid.Column width={10}>
            <Header
              as='h3'
              content='Gareth Veale'
              textAlign='left'
              style={{
                fontSize: mobile ? '1em' : '2em',
                fontWeight: 'normal',
                marginBottom: '0.2em',
                padding: '0em',
                color: 'black'
              }}
            />
            <Header
              as='h4'
              content='Software Engineer.'
              textAlign='left'
              style={{
                fontSize: mobile ? '0.75em' : '1em',
                fontWeight: 'normal',
                margin: '0em',
                color: 'black'
              }}
            />
                        <Header
              as='h4'
              content='Full-time flaneur: Philosophy, Business, Macro.'
              textAlign='left'
              style={{
                fontSize: mobile ? '0.75em' : '1em',
                fontWeight: 'normal',
                margin: '0em',
                color: 'black'
              }}
            />
            <Container>
              <Icon name='twitter' />
              <Icon name='github' />
              <Icon name='mail' />
              <Icon name='youtube' />
              <Icon name='linkedin' />
            </Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
)