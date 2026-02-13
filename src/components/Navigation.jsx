import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from 'react-router-dom';
import cedarLogo from '../assets/cedre.png';


function Navigation() {
  const location = useLocation();

  return (
    <Navbar bg="custom" variant="light" expand="lg" className="navbar-custom sticky-top shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/" className="fs-3 fw-bold d-flex align-items-center">
          <img
            src={cedarLogo}
            alt="Cèdre"
            height="40"
            width="40"
            className="me-2 rounded-circle border border-white"
            style={{ objectFit: 'cover', backgroundColor: '#fff' }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" active={location.pathname === '/'}>Accueil</Nav.Link>
            <Nav.Link as={Link} to="/menu" active={location.pathname === '/menu'}>La Carte</Nav.Link>
            <Nav.Link as={Link} to="/acces" active={location.pathname === '/acces'}>Accès & Contact</Nav.Link>
            <Nav.Link href="https://www.ubereats.com/fr/store/le-cedre-du-liban/KhnL-qr4SxqnyE0-1GeC_g" target="_blank" className="btn btn-success text-white ms-lg-3 px-3 rounded-pill">
              Commander
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
