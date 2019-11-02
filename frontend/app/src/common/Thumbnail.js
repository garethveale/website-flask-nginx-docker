import React from 'react';
import { Container, Image } from 'semantic-ui-react';

export const Thumbnail = ({ activeItem }) => {
    const title = {
        fontWeight: '700',
        fontSize: '0.8em',
        color: 'black',
        paddingLeft: '2em',
        paddingRight: '2em',
    }
    const subtitle = {
        fontWeight: '400',
        fontSize: '0.8em',
        color: 'black',
        paddingLeft: '2em',
        paddingRight: '2em',
    }

    return (
        <Container>
            <Image size='small' centered
                src='https://react.semantic-ui.com/images/avatar/large/matthew.png' 
            />
            <p style={title}>Title</p>
            <p style={subtitle}>This is a subtitle and should be a short introduction to the post.</p>
        </Container>
    )
}