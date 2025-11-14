export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-gray-100/80 backdrop-blur border-t border-gray-200 mt-12">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6 text-center text-sm text-gray-600">
                <p className="mb-1">
                    &copy; {year}{' '}
                    <span className="font-semibold">
                        Alumnos: Ayala, Santiago - Colman, Máximo - Martínez, Javier - Pereyra, Ramiro - Zigaran, Lucas.
                    </span>
                </p>
                <p>Ingeniería de software</p>
            </div>
        </footer>
    );
}

