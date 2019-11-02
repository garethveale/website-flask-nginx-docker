import React from 'react'
import { Container, Grid, Header, Image } from 'semantic-ui-react'

const AnotherGridLayout = () => (
  <Container>
    <style>
      {`
      p {
        align-content: center;
        background-color: #495285;
        color: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-height: 6em;
      }
      p > span {
        opacity: 0.4;
        text-align: center;
      }
    }
    `}
    </style>
    
    <Header as='h2' textAlign='center'>
      Stackable (mobile)
    </Header>
    <Grid columns={4} stackable>
      <Grid.Row>
        <Grid.Column>
          <Image size='small' centered
                src='https://react.semantic-ui.com/images/avatar/large/matthew.png' 
                />
        </Grid.Column>
        <Grid.Column>
        <Image size='small' centered
                src='https://react.semantic-ui.com/images/avatar/large/matthew.png' 
                />
        </Grid.Column>
        <Grid.Column>
        <Image size='small' centered
                src='https://react.semantic-ui.com/images/avatar/large/matthew.png' 
                />
        </Grid.Column>
        <Grid.Column>
        <Image size='small' centered
                src='https://react.semantic-ui.com/images/avatar/large/matthew.png' 
                />
        </Grid.Column>
      </Grid.Row>
    </Grid>

  </Container>
)

export default AnotherGridLayout