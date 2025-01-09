import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
  const [activeLink, setActiveLink] = useState('home');
  const expand = 'md';

  const handleSetActive = (to) => {
    setActiveLink(to);
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
          aria-controls={`offcanvasNavbar-expand-${expand}`}
          className="navbar-toggler-white"
        />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title
              id={`offcanvasNavbarLabel-expand-${expand}`}
              className="text-white offcanvas-title"
            >
              Nadjib M
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Link
                to="home"
                smooth={true}
                duration={500}
                className={`nav-link ${activeLink === 'home' ? 'active' : ''}`}
                onSetActive={handleSetActive}
              >
                Home
              </Link>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className={`nav-link ${activeLink === 'about' ? 'active' : ''}`}
                onSetActive={handleSetActive}
              >
                About
              </Link>
              <Link
                to="skills"
                smooth={true}
                duration={500}
                className={`nav-link ${
                  activeLink === 'skills' ? 'active' : ''
                }`}
                onSetActive={handleSetActive}
              >
                Skills
              </Link>
              <Link
                to="projects"
                smooth={true}
                duration={500}
                className={`nav-link ${
                  activeLink === 'projects' ? 'active' : ''
                }`}
                onSetActive={handleSetActive}
              >
                Projects
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className={`nav-link ${
                  activeLink === 'contact' ? 'active' : ''
                }`}
                onSetActive={handleSetActive}
              >
                Contact
              </Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
