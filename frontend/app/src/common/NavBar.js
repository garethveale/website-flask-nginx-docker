import React from 'react';
import { List, Button } from 'semantic-ui-react';
import Nav from 'react-bootstrap/Nav';

export const NavBar = ({ activeItem }) => {
    return (
        <Nav className="justify-content-center" activeKey="/home">
            <Nav.Item>
                <Nav.Link eventKey="link-1" href='/'>Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1" href='/posts'>Posts</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1" href='/books'>Book Notes</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1" href='/contact'>Contact Me</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}