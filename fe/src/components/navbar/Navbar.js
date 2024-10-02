import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';


const NavComponent = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                {/* Logo or Brand Name */}
                <Navbar.Brand href="#home">Get Rent</Navbar.Brand>

                {/* Burger Menu for Mobile */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                {/* Collapsible Navigation Items */}
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        {/* Links */}
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#hotRequest">Hot Requst</Nav.Link>
                        <Nav.Link href="#newModels">New Models</Nav.Link>

                        {/* Dropdown Menu */}
                        <NavDropdown title="Rent Service" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Car</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">House</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Building</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Warehous</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.5">Office</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.6">Shophouse</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Contack Serivice
                            </NavDropdown.Item>
                        </NavDropdown>

                        {/* Dropdown admin */}
                        <NavDropdown title="Admin" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Tambah Item</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Daftar Car</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Daftar House</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Daftar Building</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.5">Daftar Warehous</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.6">Daftar Office</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.7">Daftar Shophouse</NavDropdown.Item>

                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Contack Serivice
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>


                    {/* Right-aligned Links */}
                    <Nav>
                        <Nav.Link href="./Login">Login</Nav.Link>
                        <Nav.Link eventKey={2} href="./Login">
                            Register
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavComponent;
