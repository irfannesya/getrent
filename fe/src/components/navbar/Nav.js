import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

const NavComponent = ({ buildings, onBuildingClick }) => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Building Rental</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <NavDropdown title="Buildings" id="basic-nav-dropdown">
                        {buildings.map(building => (
                            <NavDropdown.Item key={building.id} onClick={() => onBuildingClick(building)}>{building.name}</NavDropdown.Item>
                        ))}
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavComponent;
