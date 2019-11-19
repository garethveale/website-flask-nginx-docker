import React, { useState } from 'react';
import { PageHeading } from '../common/PageHeading';
import { Button, Container, Segment, Form, Grid } from 'semantic-ui-react';


export const Contact = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [text, setText] = useState('');

      return (
        <div style={{ backgroundColor: '#011627', height: '100vh' }}>
            <PageHeading title='Contact me' />
            <Container>
            <Grid textAlign='center' style={{ height: '5vh' }} verticalAlign='middle'>
            <Grid.Column style={{ maxWidth: 400 }}>
              <Form size='large'>
                <Segment stacked>
                  <Form.Input 
                    fluid 
                    placeholder='E-mail address' 
                    style={{ fontSize: '0.75em' }}
                    onChange={e => setEmail(e.target.value)}
                    />
                  <Form.Input
                    fluid
                    placeholder='Subject'
                    style={{ fontSize: '0.75em' }}
                    onChange={e => setSubject(e.target.value)}
                  />
                  <Form.TextArea
                    placeholder='Message'
                    style={{ fontSize: '0.75em' }}
                    onChange={e => setText(e.target.value)}
                  />
                  <Form.Field>
                    <Button 
                    color='teal' 
                    fluid 
                    size='large' 
                    style={{ fontSize: '1em' }}
                    onClick={async () => {
                      const message = {email, subject, text}
                      const response = await fetch('/contact', {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(message)
                      })

                      if (response.ok) {
                        console.log('response worked!');
                        setEmail('')
                        setSubject('')
                        setText('')
                      }
                    }}>Send</Button>
                  </Form.Field>
                </Segment>
              </Form>
            </Grid.Column>
          </Grid>
          </Container>
        </div>
      )
}