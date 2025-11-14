import { useState } from "react";
import { useNavigate } from "react-router";

function CrearJuego() {
  const [palabraSecreta, setPalabraSecreta] = useState("");
  const [longitud, setLongitud] = useState(5);
  const navigate = useNavigate();

  const handleCrearJuego = () => {
    if (palabraSecreta.length === longitud) {
      const codificada = `${longitud}-${btoa(palabraSecreta)}`;
      navigate(`/jugar/${codificada}`);
    } else {
      alert(`La palabra debe tener exactamente ${longitud} letras.`);
    }
  };

  return (
    <div>
      <h1>Crear Juego</h1>
      <input
        type="number"
        value={longitud}
        onChange={(e) => setLongitud(parseInt(e.target.value) || 5)}
        min={3}
        max={10}
        placeholder="Longitud de la palabra (3-10)"
      />
      <input
        type="text"
        value={palabraSecreta}
        onChange={(e) => setPalabraSecreta(e.target.value.toUpperCase())}
        placeholder={`Ingresa una palabra de ${longitud} letras`}
        maxLength={longitud}
      />
      <button onClick={handleCrearJuego}>Crear Juego</button>
      {palabraSecreta.length === longitud && (
        <p>
          Link para compartir: {window.location.origin}/jugar/${longitud}-$
          {btoa(palabraSecreta)}
        </p>
      )}
    </div>
  );
}

export default CrearJuego;
