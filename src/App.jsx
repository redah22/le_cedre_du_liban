import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './views/Home';
import Menu from './views/Menu';
import Access from './views/Access';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navigation />
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/acces" element={<Access />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
