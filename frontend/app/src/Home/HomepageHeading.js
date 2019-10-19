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
      <Grid celled
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
                marginTop: mobile ? '0.5em' : '1.5em',
                marginBottom: mobile ? '0.5em' : '1.5em',
                color: 'black'
              }}
            />
            <p 
            style={{
              fontSize: mobile ? '0.5em' : '0.75em',
            }}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
              ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
              magnis dis parturient montes, nascetur ridiculus mus. 
            </p>
            <Container>
              <Icon name='twitter' />
              <Icon name='github' />
              <Icon name='mail' />
            </Container>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
)