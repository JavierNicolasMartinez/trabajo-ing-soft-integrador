export default function TGS() {
    return (
        <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
            <section className="bg-white/70 backdrop-blur-md shadow-xl rounded-2xl border border-white/60 p-8">
                <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-indigo-700 via-indigo-500 to-fuchsia-500 bg-clip-text text-transparent mb-6">Teoría General de Sistemas (TGS)</h1>
                <div className="prose max-w-none prose-slate">
                    <h2>¿Qué es?</h2>
                    <p>
                        La Teoría General de Sistemas (TGS) es un campo de estudio interdisciplinario que busca entender los sistemas en su totalidad,
                        en lugar de analizar sus partes por separado. Un "sistema" se define como un conjunto de elementos o componentes que están
                        interrelacionados y que trabajan juntos para alcanzar un objetivo común.
                    </p>
                    <h2>¿En qué consiste?</h2>
                    <p>
                        La TGS consiste en identificar y aplicar principios generales válidos para diferentes tipos de sistemas, ya sean biológicos,
                        sociales, mecánicos o abstractos. Su enfoque principal es el holismo: la idea de que el sistema completo es más que la suma
                        de sus partes.
                    </p>
                    <ul>
                        <li><strong>Entradas (Inputs):</strong> Lo que el sistema recibe de su entorno.</li>
                        <li><strong>Procesos:</strong> Las transformaciones que el sistema realiza a las entradas.</li>
                        <li><strong>Salidas (Outputs):</strong> Lo que el sistema entrega a su entorno.</li>
                        <li><strong>Retroalimentación (Feedback):</strong> Información que permite al sistema autorregularse.</li>
                        <li><strong>Entorno:</strong> Todo lo que rodea al sistema y puede afectarlo.</li>
                    </ul>
                </div>
            </section>
        </main>
    );
}
