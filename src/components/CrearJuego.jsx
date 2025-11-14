import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CrearJuego() {
    const [palabraSecreta, setPalabraSecreta] = useState('');
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
        <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
            <section className="bg-white/70 backdrop-blur-md shadow-xl rounded-2xl border border-white/60 p-8">
                <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-700 via-indigo-500 to-fuchsia-500 bg-clip-text text-transparent mb-6">Juego de Palabras (Wordle)</h1>
                <p className="text-gray-600 mb-6">Elegí la longitud y definí una palabra secreta para que otros la adivinen.</p>
                <div className="grid sm:grid-cols-3 gap-4 items-end">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Longitud (3-10)</label>
                        <input
                            type="number"
                            value={longitud}
                            onChange={(e) => setLongitud(parseInt(e.target.value) || 5)}
                            min={3}
                            max={10}
                            className="w-full rounded-xl border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 px-4 py-2"
                            placeholder="Longitud de la palabra"
                        />
                    </div>
                    <div className="sm:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Palabra secreta</label>
                        <input
                            type="text"
                            value={palabraSecreta}
                            onChange={(e) => setPalabraSecreta(e.target.value.toUpperCase())}
                            placeholder={`Ingresa una palabra de ${longitud} letras`}
                            maxLength={longitud}
                            className="w-full rounded-xl border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 px-4 py-2 tracking-widest uppercase"
                        />
                    </div>
                </div>
                <div className="mt-6 flex flex-wrap items-center gap-4">
                    <button
                        onClick={handleCrearJuego}
                        className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 text-white px-5 py-2.5 shadow-lg hover:bg-indigo-700 transition"
                    >
                        Crear y jugar
                    </button>
                    {palabraSecreta.length === longitud && (
                        <div className="text-sm text-gray-700 break-all">
                            <span className="font-medium">Link para compartir:</span>{' '}
                            {window.location.origin}/jugar/{longitud}-{btoa(palabraSecreta)}
                        </div>
                    )}
                </div>
                <div className="mt-8 text-sm text-gray-600">
                    <p><span className="font-semibold">Verde:</span> letra correcta en la posición correcta.</p>
                    <p><span className="font-semibold">Amarillo:</span> letra presente pero en otra posición.</p>
                    <p><span className="font-semibold">Blanco:</span> la letra no está en la palabra.</p>
                </div>
            </section>
        </main>
    );
}

export default CrearJuego;