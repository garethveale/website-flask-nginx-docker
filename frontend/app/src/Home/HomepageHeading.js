import React from 'react';
import { NavBar } from '../common/NavBar';
import { Container, Header, Grid, Image, Icon } from 'semantic-ui-react';
 
// TODO: Pass mobile down as props

export const HomepageHeading = ({ mobile }) => (
  <div style={{ backgroundColor: '#111111' }}>
    <NavBar />
    <Grid textAlign='center' style={{ height: '40vh', }} verticalAlign='middle'>
      <Grid.Column width={4}>
      </Grid.Column>
      <Grid.Column width={7}>
      <Header
              as='h3'
              content='GARETH VEALE'
              textAlign='left'
              style={{
                fontSize: mobile ? '1em' : '2em',
                fontWeight: 'normal',
                marginBottom: '0.2em',
                padding: '0em',
                color: 'white'
              }}
            />
            <Header
              as='h4'
              content='Self learning software engineer. Full-time flaneur: Philosophy, Business, Macro.'
              textAlign='left'
              style={{
                fontSize: mobile ? '0.75em' : '1em',
                fontWeight: 'normal',
                margin: '0em',
                color: 'white'
              }}
            />
      </Grid.Column>
      <Grid.Column width={4}>
      </Grid.Column>
    </Grid>
  </div>
)

/*        <Container>
<Icon name='twitter' />
<Icon name='github' />
<Icon name='mail' />
<Icon name='youtube' />
<Icon name='linkedin' />
</Container>*/