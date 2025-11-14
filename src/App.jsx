import { BrowserRouter as Router, Routes, Route } from "react-router";
import CrearJuego from "./components/CrearJuego";
import TableroJuego from "./components/TableroJuego";
import "./App.css";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/crear-juego" element={<CrearJuego />} />
        <Route path="/jugar/:param" element={<TableroJuego />} />
      </Routes>
    </Router>
  );
}

export default App;
