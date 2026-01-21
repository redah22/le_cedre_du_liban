import { Helmet } from 'react-helmet-async';
import Container from 'react-bootstrap/Container';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { menuData } from '../models/menuData';
import MagicBento from '../components/MagicBento';
import SpotlightCard from '../components/SpotlightCard';
import StarBorder from '../components/StarBorder';

function Menu() {
  const renderItems = (items) => (
    <div className="projects-grid">
      {items.map(item => (
        <SpotlightCard
          key={item.id}
          className="menu-item-card"
          spotlightColor="rgba(76, 175, 80, 0.2)" // Greenish glow matching the theme
        >
          <div className="d-flex justify-content-between align-items-baseline mb-2">
            <h3 className="h5 fw-bold text-primary mb-0">{item.name}</h3>
            <span className="fw-bold text-secondary">{item.price}</span>
          </div>
          <p className="text-muted fst-italic mb-0">
            {item.description}
          </p>
        </SpotlightCard>
      ))}
    </div>
  );

  return (
    <Container className="py-5">
      <Helmet>
        <title>La Carte & Menus - Le Cèdre du Liban Béziers</title>
        <meta name="description" content="Découvrez notre carte de spécialités libanaises : Mezzés froids et chauds, Grillades, Desserts maison. Cuisine authentique à Béziers." />
      </Helmet>
      <h1 className="text-center mb-5 font-ortica">Notre Carte</h1>

      {/* Interactive Menu Categories */}
      <div className="mb-5">
        <MagicBento
          textAutoHide={false}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={300}
          particleCount={8}
          glowColor="255, 255, 255"
        />
      </div>

      <h2 className="text-center mb-4 mt-5 font-ortica">Détail des Plats</h2>
      <Tabs
        defaultActiveKey="entrees"
        id="menu-tabs"
        className="mb-4 justify-content-center custom-tabs"
        fill
      >
        <Tab eventKey="entrees" title="Entrées & Mezzés">
          {renderItems(menuData.entrees)}
        </Tab>
        <Tab eventKey="plats" title="Plats & Grillades">
          {renderItems(menuData.plats)}
        </Tab>
        <Tab eventKey="desserts" title="Desserts">
          {renderItems(menuData.desserts)}
        </Tab>
      </Tabs>

      <div className="mt-5 d-flex justify-content-center">
        <div style={{ maxWidth: '600px', width: '100%' }}>
          <StarBorder color="#B71C1C" speed="4s" highlight={true}>
            <h4>Formule Midi</h4>
            <p className="lead">Entrée + Plat ou Plat + Dessert</p>
            <p className="fw-bold fs-4 text-primary">15.90€</p>
            <small className="text-muted">Uniquement le midi, du lundi au vendredi.</small>
          </StarBorder>
        </div>
      </div>
    </Container>
  );
}

export default Menu;