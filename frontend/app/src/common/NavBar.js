import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { checkPropTypes } from 'prop-types';

export const NavBar = ({ color }) => {
    const linkStyle = {
        color: color == 'light' ? '#FDFFFC' : 'black',
        fontSize: '0.8em',
        fontWeight: '500'
    }
    const navStyle = {
        padding: '1em',
        color:'#FDFFFC',
    }

    return (
        <Nav className="justify-content-center" activeKey="/home" style={navStyle}>
            <Nav.Item>
                <Nav.Link style={linkStyle} href='/'>HOME</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link style={linkStyle} href='/software'>SOFTWARE</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link style={linkStyle} href='/posts'>POSTS</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link style={linkStyle} href='/about'>ABOUT</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link style={linkStyle} href='/contact'>CONTACT</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}