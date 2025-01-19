import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-scroll';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/NavBar.css';

export default function NavBar() {
  const [activeLink, setActiveLink] = useState('home'); // State to track the active link
  const [showOffcanvas, setShowOffcanvas] = useState(false); // State to control the offcanvas visibility
  const expand = 'md'; // Define the breakpoint for expanding the navbar

  // Function to handle setting the active link
  const handleSetActive = (to) => {
    setActiveLink(to);
  };

  // Function to handle link click and close the offcanvas menu
  const handleLinkClick = () => {
    setShowOffcanvas(false);
  };

  return (
    <Navbar
      key={expand}
      expand={expand}
      className="bg-body-tertiary mb-3 navBar"
      fixed="top"
    >
      <Container fluid>
        <Navbar.Brand href="#home">
          <Link to="home" smooth={true} duration={500}>
            Nadjib <span>M</span>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls={`offcanvasNavbar-expand-${expand}`}
          className="navbar-toggler-white"
          onClick={() => setShowOffcanvas(!showOffcanvas)}
        />
        <Navbar.Offcanvas
          show={showOffcanvas}
          onHide={() => setShowOffcanvas(false)}
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
                onClick={handleLinkClick}
              >
                Home
              </Link>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className={`nav-link ${activeLink === 'about' ? 'active' : ''}`}
                onSetActive={handleSetActive}
                onClick={handleLinkClick}
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
                onClick={handleLinkClick}
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
                onClick={handleLinkClick}
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
                onClick={handleLinkClick}
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
