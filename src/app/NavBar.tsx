'use client';
import Link from 'next/link'
import {usePathname } from 'next/navigation';
import { Navbar ,Container ,Nav, NavDropdown } from 'react-bootstrap'
export default function NavBar(){
    const pathName  =usePathname();
    
    return (
        < Navbar bg="primary" variant="dark" sticky="top" expand="sm" collapseOnSelect>
            <Container>
                <Navbar.Brand as={Link} href="/"  >
                    Next-image-gallery
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="main-navbar"/>
                <Navbar.Collapse id='mian-navbar'>
                    <Nav>
                        <Nav.Link as={Link} href="/static" active={pathName==='./static'}>static</Nav.Link>
                        <Nav.Link as={Link} href="/dynamic" active={pathName==='./dynamic'}>dynamic</Nav.Link>
                        <Nav.Link as={Link} href="/isr" active={pathName==='./isr'}>Isr</Nav.Link>
                        <NavDropdown title="topics" id='topics-dropdown'>
                            <NavDropdown.Item as={Link} href="/topics/tech">tech</NavDropdown.Item>
                            <NavDropdown.Item as={Link} href="/topics/codding">codding</NavDropdown.Item>
                            <NavDropdown.Item as={Link} href="/topics/ai">ai</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    ) 
}