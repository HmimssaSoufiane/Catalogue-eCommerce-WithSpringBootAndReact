import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import logo from '../assets/SEBO.png'; // with import

export default function NavBar() {
    return (
        <>
            <Navbar >
                <Navbar.Brand href="/">
                    <img
                        src={logo}
                        width="80"
                        height="80"
                        className="d-inline-block align-top"
                        alt="React Bootstrap logo"
                    />
                </Navbar.Brand>
                <Navbar.Brand href="/">SEBO</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="#features">Contact</Nav.Link>
                    <Nav.Link href="#pricing">About us</Nav.Link>

                </Nav>
                <Nav className="justify-content-end" activeKey="/home">
                    <Nav.Item id="LogIn">
                        <Nav.Link href="/SignIn">LogIn</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link id="SingUp" href="/SignUp" eventKey="SignUp">SingUp</Nav.Link>
                    </Nav.Item>
                </Nav>

            </Navbar>
        </>
    );
}