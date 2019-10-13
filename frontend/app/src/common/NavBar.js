import React from 'react';
import { List, Button } from 'semantic-ui-react';
import Nav from 'react-bootstrap/Nav';

export const NavBar = ({ activeItem }) => {
    return (
        <Nav className="justify-content-center" activeKey="/home">
            <Nav.Item>
                <Nav.Link eventKey="link-1" href='#'>Posts</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-1" href='#'>Book Notes</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link eventKey="link-2" href='#'>Contact Me</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}