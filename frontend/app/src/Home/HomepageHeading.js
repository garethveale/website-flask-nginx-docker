import React from 'react';
import { NavBar } from '../common/NavBar';
import { Container, Header, Grid, Image, Icon } from 'semantic-ui-react';
// TODO: Pass mobile down as props

export const HomepageHeading = ({ mobile }) => (
  <div style={{ backgroundColor: '#011627' }}>
    <NavBar />
    <Container  textAlign='center' style={{ height: '50vh', }} >
    <Container verticalAlign='middle' style={{ paddingTop: '10vh' }}>
      <Header
                as='h1'
                content='GARETH VEALE'
                textAlign='left'
                style={{
                  fontSize: '4em',
                  fontWeight: 'normal',
                  marginBottom: '0.2em',
                  padding: '0em',
                  color: '#FDFFFC',
                  fontFamily: 'Press Start 2P',
                }}
              />
        <Header
                as='h4'
                content='Self learning software engineer. Full-time flaneur: Philosophy, Business, Finance.'
                textAlign='left'
                style={{
                  fontSize: '1em',
                  fontWeight: 'normal',
                  margin: '0em',
                  color: '#FDFFFC'
                }}
          />
      </Container>
      <Container textAlign='left' style={{ paddingTop: '1em' }}>
        <Icon size='big' name='twitter' style={{color:'#FDFFFC'}} />
        <Icon size='big' name='github' style={{color:'#FDFFFC'}} />
        <Icon size='big' name='mail' style={{color:'#FDFFFC'}} />
        <Icon size='big' name='youtube' style={{color:'#FDFFFC'}} />
        <Icon size='big' name='twitch' style={{color:'#FDFFFC'}} />
        <Icon size='big' name='linkedin' style={{color:'#FDFFFC'}} />
      </Container>
    </Container>
  </div>
)