import { Helmet } from 'react-helmet-async';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import mezzeImg from '../assets/mezze_authentic.jpg';
import grillImg from '../assets/grill_ue.jpg';
import taboulehImg from '../assets/tabouleh_ue.jpg';
import SpotlightCard from '../components/SpotlightCard';

function Home() {
  return (
    <div className="home-background">
      <Helmet>
        <title>Le Cèdre du Liban - Restaurant Libanais à Béziers</title>
        <meta name="description" content="Découvrez Le Cèdre du Liban à Béziers. Mezzés authentiques, grillades au feu de bois et vente à emporter. Cuisine maison traditionnelle." />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Restaurant",
              "name": "Le Cèdre du Liban",
              "image": "https://cedreduliban.com/mezze_cover.jpg",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "60 All. Paul Riquet",
                "addressLocality": "Béziers",
                "postalCode": "34500",
                "addressCountry": "FR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 43.3429381,
                "longitude": 3.2188813
              },
              "telephone": "+33467492326",
              "priceRange": "€€",
              "servesCuisine": "Libanaise",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Monday",
                  "opens": "19:00",
                  "closes": "22:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  "opens": "12:00",
                  "closes": "14:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  "opens": "19:00",
                  "closes": "22:00"
                }
              ]
            }
          `}
        </script>
      </Helmet>

      {/* Hero Section */}
      <div className="text-white text-center py-5" style={{
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Container>
          <h1 className="display-3 mb-3 font-ortica" style={{ color: '#FFFFFF', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>Le Cedre du Liban</h1>
          <p className="lead mb-4 fs-3 mx-auto">Voyagez au cœur des saveurs orientales à Béziers.</p>
          <Button as={Link} to="/menu" variant="warning" size="lg" className="px-5 rounded-pill shadow-lg">Voir la Carte</Button>
        </Container>
      </div>

      {/* Intro Section */}
      <Container className="py-5">
        <Row className="justify-content-center">
          <Col md={8} className="text-center">
            <h2 className="mb-4">Bienvenue</h2>
            <p className="lead text-muted">
              Depuis des années, nous vous accueillons pour vous faire découvrir l'authenticité de la cuisine libanaise.
              Tous nos plats sont faits maison avec des produits frais.
            </p>
          </Col>
        </Row>
      </Container>

      {/* Highlights */}
      <div className="py-5" style={{ backgroundColor: 'var(--section-alt-bg)' }}>
        <Container>
          <h2 className="text-center mb-5">Nos Spécialités</h2>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm border-0">
                <Card.Img variant="top" src={mezzeImg} style={{ height: '250px', objectFit: 'cover' }} />
                <Card.Body>
                  <Card.Title>Mezzés Variés</Card.Title>
                  <Card.Text>
                    Un assortiment de saveurs froides et chaudes à partager... ou pas !
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm border-0">
                <Card.Img variant="top" src={grillImg} style={{ height: '250px', objectFit: 'cover' }} />
                <Card.Body>
                  <Card.Title>Grillades au Feu</Card.Title>
                  <Card.Text>
                    Brochettes de poulet mariné (Chiche Taouk) ou d'agneau, grillées à la perfection.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="h-100 shadow-sm border-0">
                <Card.Img variant="top" src={taboulehImg} style={{ height: '250px', objectFit: 'cover' }} />
                <Card.Body>
                  <Card.Title>Authentique Taboulé</Card.Title>
                  <Card.Text>
                    Notre star : persil plat, menthe, tomates, oignons, citron et huile d'olive vierge.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      {/* Reviews Section */}
      <Container className="py-5">
        <div className="text-center mb-5">
          <h2 className="mb-3">Nos Clients nous aiment</h2>
          <div className="d-inline-flex align-items-center justify-content-center border rounded-pill px-4 py-2" style={{ borderColor: 'var(--secondary-color)', backgroundColor: 'var(--card-bg)' }}>
            <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#34E0A1" className="me-2">
              <title>Tripadvisor</title>
              <path d="M12.006 4.295c-2.67 0-5.338.784-7.645 2.353H0l1.963 2.135a5.997 5.997 0 0 0 4.04 10.43 5.976 5.976 0 0 0 4.075-1.6L12 19.705l1.922-2.09a5.972 5.972 0 0 0 4.072 1.598 6 6 0 0 0 6-5.998 5.982 5.982 0 0 0-1.957-4.432L24 6.648h-4.35a13.573 13.573 0 0 0-7.644-2.353zM12 6.255c1.531 0 3.063.303 4.504.903C13.943 8.138 12 10.43 12 13.1c0-2.671-1.942-4.962-4.504-5.942A11.72 11.72 0 0 1 12 6.256zM6.002 9.157a4.059 4.059 0 1 1 0 8.118 4.059 4.059 0 0 1 0-8.118zm11.992.002a4.057 4.057 0 1 1 .003 8.115 4.057 4.057 0 0 1-.003-8.115zm-11.992 1.93a2.128 2.128 0 0 0 0 4.256 2.128 2.128 0 0 0 0-4.256zm11.992 0a2.128 2.128 0 0 0 0 4.256 2.128 2.128 0 0 0 0-4.256z" />
            </svg>
            <span className="text-uppercase" style={{ letterSpacing: '0.05em', fontSize: '0.9rem' }}>Recommandé sur <span className="fw-bold">TripAdvisor</span></span>
          </div>
        </div>

        <Row className="justify-content-center">
          <Col md={4} className="mb-4">
            <SpotlightCard className="h-100 shadow border-0" spotlightColor="rgba(76, 175, 80, 0.2)">
              <div className="text-center p-4">
                <div className="mb-2 text-warning fs-4">★★★★★</div>
                <h5 className="fw-bold">Excellent repas</h5>
                <p className="small text-muted mb-3">Kate M • Avril 2025</p>
                <p className="fst-italic text-muted">
                  "Mon ami et moi avons eu un excellent repas ici... J'avais le plateau végétarien et mon ami la version viande. Le service était sympathique et rapide et je n'aurais aucune hésitation à recommander cet endroit."
                </p>
              </div>
            </SpotlightCard>
          </Col>
          <Col md={4} className="mb-4">
            <SpotlightCard className="h-100 shadow border-0" spotlightColor="rgba(76, 175, 80, 0.2)">
              <div className="text-center p-4">
                <div className="mb-2 text-warning fs-4">★★★★★</div>
                <h5 className="fw-bold">A refaire</h5>
                <p className="small text-muted mb-3">Valerie C • Mars 2025</p>
                <p className="fst-italic text-muted">
                  "Parfait pour une soirée tranquille en couple ou en famille, on y mange bien et l'équipe au top et le prix pour tous les budgets 👍"
                </p>
              </div>
            </SpotlightCard>
          </Col>
          <Col md={4} className="mb-4">
            <SpotlightCard className="h-100 shadow border-0" spotlightColor="rgba(76, 175, 80, 0.2)">
              <div className="text-center p-4">
                <div className="mb-2 text-warning fs-4">★★★★★</div>
                <h5 className="fw-bold">Belle expérience</h5>
                <p className="small text-muted mb-3">Dali H • Mars 2025</p>
                <p className="fst-italic text-muted">
                  "Très belle découverte. Bel accueil, le jeune serveur très sympathique et de bons conseils. Je recommande le mezze complet... c'était délicieux, nous reviendrons à coup sûr."
                </p>
              </div>
            </SpotlightCard>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
