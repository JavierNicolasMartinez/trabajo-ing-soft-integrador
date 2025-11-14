export default function Software() {
    return (
        <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
            <section className="bg-white/70 backdrop-blur-md shadow-xl rounded-2xl border border-white/60 p-8">
                <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-indigo-700 via-indigo-500 to-fuchsia-500 bg-clip-text text-transparent mb-6">Software</h1>
                <div className="prose max-w-none prose-slate">
                    <h2>¿Qué es?</h2>
                    <p>
                        El software es el conjunto de instrucciones, programas, datos y reglas que indican al hardware cómo funcionar y qué tareas realizar.
                        Es la parte intangible de cualquier dispositivo informático.
                    </p>
                    <h2>¿Cómo lo vemos cotidianamente?</h2>
                    <p>
                        Está en todas partes: en el celular (Android, iOS, apps), en la computadora (Windows, macOS, Linux, navegadores y programas),
                        y en la vida diaria (cajeros, microondas, GPS, Smart TV).
                    </p>
                    <h2>Tipos de Software</h2>
                    <ul>
                        <li>
                            <strong>Software de Sistema:</strong> Administra los recursos del hardware y permite que otros programas funcionen. Ejemplos: Windows 11, Android, drivers.
                        </li>
                        <li>
                            <strong>Software de Aplicación:</strong> Programas para tareas específicas. Ejemplos: Word, Excel, Chrome, TikTok.
                        </li>
                        <li>
                            <strong>Software de Programación:</strong> Herramientas para crear y depurar software. Ejemplos: VS Code, compiladores, IDEs.
                        </li>
                    </ul>
                </div>
            </section>
        </main>
    );
}
