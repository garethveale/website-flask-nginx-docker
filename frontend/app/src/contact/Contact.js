import React from 'react';
import { PageHeading } from '../common/PageHeading';
import { Button, Container, Segment, Form, Grid } from 'semantic-ui-react';


class Home2 extends React.Component {
    render() {
      return (
        <div style={{ backgroundColor: '#011627', height: '100vh' }}>
            <PageHeading title='Contact me' />
            <Container>
            <Grid textAlign='center' style={{ height: '5vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 400 }}>
              <Form size='large'>
                <Segment stacked>
                  <Form.Input fluid placeholder='E-mail address' style={{ fontSize: '0.75em' }}/>
                  <Form.Input
                    fluid
                    placeholder='Subject'
                    style={{ fontSize: '0.75em' }}
                  />
                  <Form.TextArea
                    fluid
                    placeholder='Message'
                    style={{ fontSize: '0.75em' }}
                  />

                  <Button color='teal' fluid size='large' style={{ fontSize: '1em' }}>
                    Send
                  </Button>
                </Segment>
              </Form>
            </Grid.Column>
          </Grid>
          </Container>
        </div>
      )
    }
}

export default Home2;