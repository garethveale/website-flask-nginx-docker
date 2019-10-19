import React from 'react';
import { Card, Image } from 'semantic-ui-react';

export const Thumbnail = ({ activeItem }) => {
    return (
        <Card centered>
            <Image 
                src='https://react.semantic-ui.com/images/avatar/large/matthew.png' 
                wrapped ui={false} small />
            <Card.Content>
            <Card.Header>Post Title</Card.Header>
            <Card.Meta>
                <span className='date'>SubHead</span>
            </Card.Meta>
            </Card.Content>
        </Card>
    )
}