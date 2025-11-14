export default function IngenieriaSoftware() {
    return (
        <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
            <section className="bg-white/70 backdrop-blur-md shadow-xl rounded-2xl border border-white/60 p-8">
                <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-indigo-700 via-indigo-500 to-fuchsia-500 bg-clip-text text-transparent mb-6">Ingeniería de Software</h1>
                <div className="prose max-w-none prose-slate">
                    <h2>¿Cómo y por qué surgió?</h2>
                    <p>
                        Surgió como respuesta a la “crisis del software” (años 60-70): proyectos atrasados, sobrecostos, errores y fracasos. Se necesitó un
                        enfoque disciplinado, similar a otras ingenierías, para construir software predecible y de calidad.
                    </p>
                    <h2>¿En qué consiste?</h2>
                    <p>
                        Es la aplicación de un enfoque sistemático, disciplinado y cuantificable al desarrollo, operación y mantenimiento del software.
                        No se trata solo de programar: gestiona la complejidad de todo el ciclo de vida.
                    </p>
                    <h2>¿Cómo se utiliza?</h2>
                    <ul>
                        <li><strong>Metodologías Ágiles (Scrum, Kanban):</strong> Entrega en ciclos cortos ante cambios frecuentes.</li>
                        <li><strong>Metodologías Tradicionales (Cascada):</strong> Requisitos claros y fijos desde el inicio.</li>
                        <li><strong>Gestión de Proyectos:</strong> Planificación de recursos, tiempos y costos.</li>
                        <li><strong>Control de Calidad (Testing):</strong> Asegura el correcto funcionamiento antes de entregar.</li>
                        <li><strong>Gestión de Configuración:</strong> Control de versiones (p. ej., Git).</li>
                    </ul>
                </div>
            </section>
        </main>
    );
}
