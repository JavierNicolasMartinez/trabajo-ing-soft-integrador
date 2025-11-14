import { useState, useMemo, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function TableroJuego() {
    const { param } = useParams();
    const navigate = useNavigate();
    const [intentos, setIntentos] = useState([]);
    const [intentoActual, setIntentoActual] = useState('');
    const [estadoJuego, setEstadoJuego] = useState('jugando'); // 'jugando', 'ganado', 'perdido'

    const { palabraSecreta, longitud } = useMemo(() => {
        try {
            const [longitudStr, codificada] = param.split('-');
            const longitud = parseInt(longitudStr);
            const decodificada = atob(codificada);
            if (decodificada.length === longitud) {
                return { palabraSecreta: decodificada.toUpperCase(), longitud };
            } else {
                alert('Palabra inválida.');
                return { palabraSecreta: '', longitud: 5 };
            }
        } catch {
            alert('Error al decodificar la palabra.');
            return { palabraSecreta: '', longitud: 5 };
        }
    }, [param]);

    useEffect(() => {
        if (estadoJuego === 'ganado') {
            setTimeout(() => navigate('/juego'), 2000);
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
        setIntentoActual('');

        if (nuevoIntento === palabraSecreta) {
            setEstadoJuego('ganado');
        } else if (nuevosIntentos.length === 6) {
            setEstadoJuego('perdido');
        }
    };

    const compararPalabras = (intento, secreta) => {
        const resultado = [];
        const secretaArray = secreta.split('');
        const intentoArray = intento.split('');

        // Primero, marcar correctos
        for (let i = 0; i < longitud; i++) {
            if (intentoArray[i] === secretaArray[i]) {
                resultado[i] = 'correcto';
                secretaArray[i] = null;
            }
        }

        // Luego, marcar presentes
        for (let i = 0; i < longitud; i++) {
            if (resultado[i] !== 'correcto') {
                const index = secretaArray.indexOf(intentoArray[i]);
                if (index !== -1) {
                    resultado[i] = 'presente';
                    secretaArray[index] = null;
                } else {
                    resultado[i] = 'ausente';
                }
            }
        }

        return resultado;
    };

    const getCellClasses = (estado) => {
        switch (estado) {
            case 'correcto':
                return 'bg-green-500 text-white border-green-500';
            case 'presente':
                return 'bg-yellow-400 text-white border-yellow-400';
            case 'ausente':
                return 'bg-white text-gray-800 border-gray-300';
            default:
                return 'bg-white text-gray-800 border-gray-300';
        }
    };

    return (
        <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
            <section className="bg-white/70 backdrop-blur-md shadow-xl rounded-2xl border border-white/60 p-8">
                <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-700 via-indigo-500 to-fuchsia-500 bg-clip-text text-transparent mb-6">Adivina la Palabra</h1>
                <div className="mb-6 text-gray-600">Intentos disponibles: 6 • Longitud: {longitud}</div>
                <div className="flex flex-col gap-2 items-center mb-6">
                    {Array.from({ length: 6 }, (_, rowIndex) => (
                        <div key={rowIndex} className="flex gap-2">
                            {Array.from({ length: longitud }, (_, colIndex) => {
                                const intento = intentos[rowIndex];
                                const letra = intento
                                    ? intento.palabra[colIndex]
                                    : rowIndex === intentos.length
                                        ? intentoActual[colIndex] || ''
                                        : '';
                                const estado = intento ? intento.resultado[colIndex] : '';
                                return (
                                    <div
                                        key={colIndex}
                                        className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl border font-bold text-xl sm:text-2xl flex items-center justify-center tracking-widest uppercase ${getCellClasses(estado)}`}
                                    >
                                        {letra}
                                    </div>
                                );
                            })}
                        </div>
                    ))}
                </div>
                {estadoJuego === 'jugando' && (
                    <div className="flex flex-wrap gap-3 items-center justify-center">
                        <input
                            type="text"
                            value={intentoActual}
                            onChange={(e) => setIntentoActual(e.target.value.toUpperCase())}
                            maxLength={longitud}
                            placeholder={`Ingresa tu intento de ${longitud} letras`}
                            className="w-64 rounded-xl border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 px-4 py-2 tracking-widest uppercase"
                        />
                        <button
                            onClick={handleSubmitIntento}
                            className="rounded-xl bg-indigo-600 text-white px-5 py-2.5 shadow-lg hover:bg-indigo-700 transition"
                        >
                            Adivinar
                        </button>
                    </div>
                )}
                {estadoJuego === 'ganado' && (
                    <div className="text-center text-green-700 font-semibold text-xl">¡Ganaste! Redirigiendo…</div>
                )}
                {estadoJuego === 'perdido' && (
                    <div className="text-center text-red-600 font-semibold text-xl">¡Perdiste! La palabra era {palabraSecreta}</div>
                )}
            </section>
        </main>
    );
}

export default TableroJuego;