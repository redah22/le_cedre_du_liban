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
        <Tab eventKey="entrees" title="Entrées">
          <h3 className="section-title text-center mt-3">Entrées Chaudes</h3>
          {renderItems(menuData.entreesChaudes)}
          <h3 className="section-title text-center mt-5">Entrées Froides</h3>
          {renderItems(menuData.entreesFroides)}
        </Tab>
        <Tab eventKey="mezzes" title="Menus & Mezzés">
          <h3 className="section-title text-center mt-3">Le Mezzé (À Partager)</h3>
          {renderItems(menuData.mezzes)}
        </Tab>
        <Tab eventKey="plats" title="Grillades">
          <h3 className="section-title text-center mt-3">Nos Grillades (Feu de Bois)</h3>
          {renderItems(menuData.grillades)}
        </Tab>
        <Tab eventKey="desserts" title="Desserts">
          {renderItems(menuData.desserts)}
        </Tab>
        <Tab eventKey="boissons" title="Boissons & Vins">
          <h3 className="section-title text-center mt-3">Apéritifs</h3>
          {renderItems(menuData.aperitifs)}
          <h3 className="section-title text-center mt-5">Carte des Vins</h3>
          {renderItems(menuData.vins)}
          <h3 className="section-title text-center mt-5">Boissons Fraîches & Chaudes</h3>
          {renderItems(menuData.boissons)}
        </Tab>
      </Tabs>

      <div className="mt-5 d-flex justify-content-center">
        <div style={{ maxWidth: '800px', width: '100%' }}>
          <StarBorder color="#B71C1C" speed="4s" highlight={true}>
            <div className="row">
              <div className="col-md-12 text-center mb-4">
                <h4 className="display-6 font-ortica mb-0">Formules Midi</h4>
                <small className="text-muted">Uniquement le midi, du lundi au vendredi (Café ou Thé inclus)</small>
              </div>
              <div className="col-md-6 text-center border-end-md">
                <p className="fw-bold fs-3 text-primary mb-1">15,00 €</p>
                <p className="fw-bold mb-2">1 Plat au Choix</p>
                <ul className="list-unstyled text-muted small">
                  <li>Le Cèdre (Assiette complète)</li>
                  <li>OU Chiche Taouk (Poulet)</li>
                  <li>OU Kafta (Viande hachée)</li>
                </ul>
              </div>
              <div className="col-md-6 text-center">
                <p className="fw-bold fs-3 text-primary mb-1">19,00 €</p>
                <p className="fw-bold mb-2">1 Entrée + 1 Plat</p>
                <ul className="list-unstyled text-muted small">
                  <li><strong>Entrée :</strong> Hommos, Moutabal, Taboulé...</li>
                  <li><strong>Plat :</strong> Chiche Taouk ou Kafta</li>
                </ul>
              </div>
            </div>
          </StarBorder>
        </div>
      </div>
    </Container>
  );
}

export default Menu;