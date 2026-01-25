import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { GeoAltFill, TelephoneFill } from 'react-bootstrap-icons';

function Footer() {
  return (
    <footer className="footer mt-auto py-5">
      <Container>
        <Row className="justify-content-between">
          <Col md={4} className="mb-4">
            <h5 className="text-uppercase tracking-wider">Le Cèdre du Liban</h5>
            <p className="small text-muted">Authentique cuisine libanaise faite maison à Béziers.</p>
          </Col>
          <Col md={3} className="mb-4">
            <h5 className="text-uppercase tracking-wider">Horaires</h5>
            <ul className="list-unstyled small text-muted">
              <li className="mb-2">Lun - Sam : 12h-14h & 19h-22h</li>
              <li>Dimanche : Fermé</li>
            </ul>
          </Col>
          <Col md={3} className="mb-4">
            <h5 className="text-uppercase tracking-wider">Contact</h5>
            <p className="small text-muted mb-2">
              <GeoAltFill className="me-2" /> 60 All. Paul Riquet, 34500 Béziers
            </p>
            <p className="small text-muted">
              <TelephoneFill className="me-2" /> 04 67 49 23 26
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-4 pt-4 border-top border-secondary">
            <small className="text-muted">&copy; {new Date().getFullYear()} Le Cèdre du Liban. Tous droits réservés.</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
