import React from 'react';
import { Card, Image } from 'semantic-ui-react';

export const Thumbnail = ({ activeItem }) => {
    return (
        <div style={{ height: '15em', width: '15em', padding:'2em', paddingTop: '0.2em' }}>
        <Card centered fluid textAlign='center'>
            <Image 
                src='https://react.semantic-ui.com/images/avatar/large/matthew.png' 
                wrapped ui={false}/>
            <Card.Content>
            <Card.Header>Post Title</Card.Header>
            <Card.Meta>
                <span className='date'>SubHead</span>
            </Card.Meta>
            </Card.Content>
        </Card>
        </div>
    )
}