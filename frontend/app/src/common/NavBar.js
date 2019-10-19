import React from 'react';
import Nav from 'react-bootstrap/Nav';

export const NavBar = ({ activeItem }) => {
    const linkStyle = {
        color: 'black',
    }
    const navStyle = {
        padding: '1em'
    }

    return (
        <Nav className="justify-content-center" activeKey="/home" style={navStyle}>
            <Nav.Item>
                <Nav.Link style={linkStyle} href='/'>Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link style={linkStyle} href='/posts'>Posts</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link style={linkStyle} href='/books'>Book Notes</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link style={linkStyle} href='/contact'>Contact Me</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}