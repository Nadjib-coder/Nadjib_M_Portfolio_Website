import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
  const [activeLink, setActiveLink] = useState('home');
  const expand = 'md';

  const handleSelect = (eventKey) => {
    setActiveLink(eventKey);
  };

  return (
    <Navbar
      key={expand}
      expand={expand}
      className="bg-body-tertiary mb-3 navBar"
      fixed="top"
    >
      <Container fluid>
        <Navbar.Brand href="#">Nadjib M</Navbar.Brand>
        <Navbar.Toggle
          className="navbar-toggler-white"
          aria-controls={`offcanvasNavbar-expand-${expand}`}
        />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              Nadjib M
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav
              className="justify-content-end flex-grow-1 pe-3"
              activeKey={activeLink}
              onSelect={handleSelect}
            >
              <Nav.Link
                eventKey="home"
                href="#home"
                className={activeLink === 'home' ? 'active' : ''}
              >
                Home
              </Nav.Link>
              <Nav.Link
                eventKey="about"
                href="#about"
                className={activeLink === 'about' ? 'active' : ''}
              >
                About
              </Nav.Link>
              <Nav.Link
                eventKey="skills"
                href="#skills"
                className={activeLink === 'skills' ? 'active' : ''}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                eventKey="projects"
                href="#projects"
                className={activeLink === 'projects' ? 'active' : ''}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                eventKey="contact"
                href="#contact"
                className={activeLink === 'contact' ? 'active' : ''}
              >
                Contact
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
