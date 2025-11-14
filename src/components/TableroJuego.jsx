import { useState, useMemo, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

function TableroJuego() {
  const { param } = useParams();
  const navigate = useNavigate();
  const [intentos, setIntentos] = useState([]);
  const [intentoActual, setIntentoActual] = useState("");
  const [estadoJuego, setEstadoJuego] = useState("jugando"); // 'jugando', 'ganado', 'perdido'

  const { palabraSecreta, longitud } = useMemo(() => {
    try {
      const [longitudStr, codificada] = param.split("-");
      const longitud = parseInt(longitudStr);
      const decodificada = atob(codificada);
      if (decodificada.length === longitud) {
        return { palabraSecreta: decodificada.toUpperCase(), longitud };
      } else {
        alert("Palabra inválida.");
        return { palabraSecreta: "", longitud: 5 };
      }
    } catch {
      alert("Error al decodificar la palabra.");
      return { palabraSecreta: "", longitud: 5 };
    }
  }, [param]);

  useEffect(() => {
    if (estadoJuego === "ganado") {
      setTimeout(() => navigate("/"), 2000); // Redirigir después de 2 segundos para mostrar el mensaje
    }
  }, [estadoJuego, navigate]);

  const handleSubmitIntento = () => {
    if (intentoActual.length !== longitud) {
      alert(`La palabra debe tener ${longitud} letras.`);
      return;
    }

    const nuevoIntento = intentoActual.toUpperCase();
    const resultado = compararPalabras(nuevoIntento, palabraSecreta);
    const nuevosIntentos = [...intentos, { palabra: nuevoIntento, resultado }];

    setIntentos(nuevosIntentos);
    setIntentoActual("");

    if (nuevoIntento === palabraSecreta) {
      setEstadoJuego("ganado");
    } else if (nuevosIntentos.length === 6) {
      setEstadoJuego("perdido");
    }
  };

  const compararPalabras = (intento, secreta) => {
    const resultado = [];
    const secretaArray = secreta.split("");
    const intentoArray = intento.split("");

    // Primero, marcar correctos
    for (let i = 0; i < longitud; i++) {
      if (intentoArray[i] === secretaArray[i]) {
        resultado[i] = "correcto";
        secretaArray[i] = null;
      }
    }

    // Luego, marcar presentes
    for (let i = 0; i < longitud; i++) {
      if (resultado[i] !== "correcto") {
        const index = secretaArray.indexOf(intentoArray[i]);
        if (index !== -1) {
          resultado[i] = "presente";
          secretaArray[index] = null;
        } else {
          resultado[i] = "ausente";
        }
      }
    }

    return resultado;
  };

  const getColor = (estado) => {
    switch (estado) {
      case "correcto":
        return "green";
      case "presente":
        return "yellow";
      case "ausente":
        return "gray";
      default:
        return "white";
    }
  };

  return (
    <div>
      <h1>Adivina la Palabra</h1>
      <div className="tablero">
        {Array.from({ length: 6 }, (_, rowIndex) => (
          <div key={rowIndex} className="fila">
            {Array.from({ length: longitud }, (_, colIndex) => {
              const intento = intentos[rowIndex];
              const letra = intento
                ? intento.palabra[colIndex]
                : rowIndex === intentos.length
                ? intentoActual[colIndex] || ""
                : "";
              const estado = intento ? intento.resultado[colIndex] : "";
              return (
                <div
                  key={colIndex}
                  className="celda"
                  style={{ backgroundColor: getColor(estado) }}
                >
                  {letra}
                </div>
              );
            })}
          </div>
        ))}
      </div>
      {estadoJuego === "jugando" && (
        <div>
          <input
            type="text"
            value={intentoActual}
            onChange={(e) => setIntentoActual(e.target.value.toUpperCase())}
            maxLength={longitud}
            placeholder={`Ingresa tu intento de ${longitud} letras`}
          />
          <button onClick={handleSubmitIntento}>Adivinar</button>
        </div>
      )}
      {estadoJuego === "ganado" && <h2>¡Ganaste! Redirigiendo...</h2>}
      {estadoJuego === "perdido" && (
        <h2>¡Perdiste! La palabra era {palabraSecreta}</h2>
      )}
    </div>
  );
}

export default TableroJuego;
