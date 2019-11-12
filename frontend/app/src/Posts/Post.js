import _ from 'lodash';
import React from 'react';
import { PageHeading } from '../common/PageHeading';
import { Container, Divider, Header } from 'semantic-ui-react';
import { Footer } from '../common/Footer';

const Paragraph = () => (
  <p>
    {[
      'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum ',
      'tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas ',
      'semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ',
      'ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean ',
      'fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. ',
      'Donec non enim in turpis pulvinar facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor ',
      'neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, ',
      'accumsan porttitor, facilisis luctus, metus',
    ].join('')}
  </p>
)

function Post({ props }) {   
    return (
    <div style={{ height: '100vh' }}>
      <PageHeading 
        title='Illusion of Transparency: Your Poker Face is Better Than You Think' 
        color='light' 
        navColor='dark'
        headHeight='small'
        margin='large'
      />
      <Container text style={{ marginTop: '2em' }}>
        <Header 
          as='h6' 
          content='11 MINUTE READ | Nov 11th 2019'
          style={{
            fontSize: '0.7em',
            fontWeight: 'bold',
          }}
        />
        {_.times(3, (i) => (
          <Paragraph key={i} />
        ))}

        {_.times(3, (i) => (
          <Paragraph key={i} />
        ))}
        <Paragraph />

        {_.times(4, (i) => (
          <Paragraph key={i} />
        ))}

        <Paragraph />

        {_.times(2, (i) => (
          <Paragraph key={i} />
        ))}
      </Container>
      <Footer />
    </div>
      );
    }
  
  export default Post;