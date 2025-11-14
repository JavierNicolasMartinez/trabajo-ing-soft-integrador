export default function Elicitacion() {
    return (
        <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
            <section className="bg-white/70 backdrop-blur-md shadow-xl rounded-2xl border border-white/60 p-8">
                <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-indigo-700 via-indigo-500 to-fuchsia-500 bg-clip-text text-transparent mb-6">Elicitación de Requerimientos</h1>
                <div className="prose max-w-none prose-slate">
                    <h2>¿Qué son?</h2>
                    <p>
                        Es el proceso de descubrir, investigar y documentar las necesidades y expectativas de clientes y usuarios (stakeholders) sobre el sistema de software.
                        Es una etapa crucial que define qué debe hacer el sistema.
                    </p>
                    <h2>¿Para qué sirven?</h2>
                    <ul>
                        <li><strong>Entender el problema:</strong> Alinea al equipo con el objetivo del negocio.</li>
                        <li><strong>Evitar malentendidos:</strong> Traduce necesidades en especificaciones claras.</li>
                        <li><strong>Definir el alcance:</strong> Establece límites de lo que se hará.</li>
                        <li><strong>Reducir costos:</strong> Corregir a tiempo es más barato.</li>
                    </ul>
                    <h2>¿Dónde se aplican?</h2>
                    <p>
                        Al inicio de cualquier proyecto y de forma continua en enfoques ágiles, refinando requisitos en cada iteración.
                    </p>
                    <h2>Técnicas de Relevamiento</h2>
                    <ul>
                        <li><strong>Entrevistas:</strong> Conversaciones uno a uno con stakeholders.</li>
                        <li><strong>Talleres/JAD:</strong> Sesiones grupales y colaborativas.</li>
                        <li><strong>Cuestionarios/Encuestas:</strong> Alcance masivo, menor profundidad.</li>
                        <li><strong>Observación (Shadowing):</strong> Ver al usuario en su entorno real.</li>
                        <li><strong>Análisis de Documentación:</strong> Revisar material y sistemas existentes.</li>
                        <li><strong>Prototipos (Mockups):</strong> Maquetas para feedback visual.</li>
                        <li><strong>Brainstorming:</strong> Generación libre de ideas.</li>
                        <li><strong>Casos de Uso / Historias de Usuario:</strong> Requisitos desde la perspectiva del usuario.</li>
                    </ul>
                </div>
            </section>
        </main>
    );
}
