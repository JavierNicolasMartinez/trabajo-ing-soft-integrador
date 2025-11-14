import { NavLink } from 'react-router-dom';

const NavItem = ({ to, label }) => (
    <NavLink
        to={to}
        className={({ isActive }) =>
            `px-3 py-2 rounded-lg transition-colors duration-200 ${isActive
                ? 'bg-white text-indigo-700 shadow-sm'
                : 'text-white/90 hover:bg-white/20 hover:text-white'
            }`
        }
    >
        {label}
    </NavLink>
);

export default function Navbar() {
    return (
        <header className="sticky top-0 z-50">
            <div className="bg-gradient-to-r from-indigo-700 via-indigo-600 to-fuchsia-600">
                <nav className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between py-4">
                        <NavLink to="/tgs" className="flex items-center gap-2">
                            <span className="text-xl font-bold tracking-tight text-white">Ing. de Software</span>
                        </NavLink>
                        <div className="hidden md:flex items-center gap-2">
                            <NavItem to="/tgs" label="TGS" />
                            <NavItem to="/software" label="Software" />
                            <NavItem to="/ingenieria" label="Ing. de Software" />
                            <NavItem to="/requerimientos" label="Elicitación" />
                            <NavItem to="/juego" label="Juego" />
                        </div>
                    </div>
                </nav>
            </div>
            <div className="md:hidden bg-white/70 backdrop-blur border-b border-white/50">
                <div className="mx-auto max-w-6xl px-4 py-2 flex gap-2 overflow-x-auto">
                    <NavItem to="/tgs" label="TGS" />
                    <NavItem to="/software" label="Software" />
                    <NavItem to="/ingenieria" label="Ingeniería" />
                    <NavItem to="/requerimientos" label="Elicitación" />
                    <NavItem to="/juego" label="Juego" />
                </div>
            </div>
        </header>
    );
}

