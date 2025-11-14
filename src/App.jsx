import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CrearJuego from './components/CrearJuego';
import TableroJuego from './components/TableroJuego';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CrearJuego />} />
        <Route path="/jugar/:param" element={<TableroJuego />} />
      </Routes>
    </Router>
  );
}

export default App;
