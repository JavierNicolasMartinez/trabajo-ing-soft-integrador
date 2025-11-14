import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TGS from './components/TGS';
import Software from './components/Software';
import IngenieriaSoftware from './components/IngenieriaSoftware';
import Elicitacion from './components/Elicitacion';
import CrearJuego from './components/CrearJuego';
import TableroJuego from './components/TableroJuego';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-800 flex flex-col">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Navigate to="/tgs" replace />} />
            <Route path="/tgs" element={<TGS />} />
            <Route path="/software" element={<Software />} />
            <Route path="/ingenieria" element={<IngenieriaSoftware />} />
            <Route path="/requerimientos" element={<Elicitacion />} />
            <Route path="/juego" element={<CrearJuego />} />
            <Route path="/jugar/:param" element={<TableroJuego />} />
            <Route path="*" element={<Navigate to="/tgs" replace />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
