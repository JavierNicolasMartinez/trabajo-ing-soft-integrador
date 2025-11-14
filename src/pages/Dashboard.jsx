import { Link } from "react-router";
import { Navbar } from "../components/Navbar";

export default function Dashboard() {
  return (
    <div className="min-h-screen min-w-screen bg-gradient-to-br from-gray-50 to-gray-100 py-7">
      {/* NAVBAR */}
      <header>
        <Navbar />
      </header>

      {/* GRID LAYOUT */}
      <main className="max-w-6xl mx-auto grid grid-cols-6 gap-6">
        {/* LEFT BIG CARD */}
        <Link
          to="/purchase"
          className="col-span-6 md:col-span-3 row-span-2 bg-gradient-to-br from-cyan-200 to-sky-300 rounded-2xl p-8 flex flex-col justify-between shadow-lg transform transition hover:-translate-y-2 hover:scale-[1.01]"
          aria-label="How to purchase our platform"
        >
          <div>
            <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
              How can you purchase our platform
            </h2>
            <p className="mt-4 text-gray-700">Learn more about the benefits</p>
          </div>

          <div className="flex items-center justify-between mt-6">
            <button className="bg-black text-white px-5 py-2 rounded-full shadow-md hover:opacity-90 transition">
              Choose your plan
            </button>
            <svg
              className="w-10 h-10 bg-white rounded-full p-2 shadow-md hover:translate-x-1 transition"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12h14"
                stroke="#000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 5l7 7-7 7"
                stroke="#000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </Link>

        {/* MIDDLE TOP - BLOG */}
        <Link
          to="/blog"
          className="col-span-6 md:col-span-1 bg-green-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between transform transition hover:-translate-y-1 hover:scale-[1.01]"
          aria-label="Blog - Read our articles"
        >
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">Blog</h3>
            <p className="mt-2 text-gray-700 text-sm">Read our articles</p>
          </div>

          <div className="mt-4 self-end">
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12h14"
                stroke="#111827"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 5l7 7-7 7"
                stroke="#111827"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </Link>

        {/* MIDDLE BOTTOM - CONTACT */}
        <Link
          to="/contact"
          className="col-span-6 md:col-span-1 bg-gray-200 rounded-2xl p-6 shadow-sm flex flex-col justify-between transform transition hover:-translate-y-1 hover:scale-[1.01]"
          aria-label="Contact - Write any question"
        >
          <div>
            <h3 className="text-2xl font-semibold text-gray-900">Contact</h3>
            <p className="mt-2 text-gray-700 text-sm">Write any question</p>
          </div>

          <div className="mt-4 self-end">
            <svg
              className="w-6 h-6"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12h14"
                stroke="#111827"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 5l7 7-7 7"
                stroke="#111827"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </Link>

        {/* RIGHT TALL - PEOPLE TRUST US */}
        <Link
          to="/trust"
          className="col-span-6 md:col-span-2 row-span-2 relative bg-gradient-to-br from-indigo-50 to-slate-100 rounded-2xl p-8 shadow-lg overflow-hidden transform transition hover:-translate-y-2 hover:scale-[1.01]"
          aria-label="People trust us"
        >
          {/* decorative floating spheres */}
          <div className="absolute -right-10 -top-8 w-40 h-40 rounded-full bg-gradient-to-br from-white to-sky-200 opacity-70 blur-2xl transform rotate-12" />
          <div className="absolute -left-6 bottom-6 w-28 h-28 rounded-full bg-gradient-to-br from-white to-indigo-200 opacity-80 blur-2xl" />

          <div className="relative z-10 h-full flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-semibold text-gray-900">
                People trust us
              </h3>
              <p className="mt-3 text-gray-700">Find out why</p>
            </div>

            <div className="self-end">
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 12h14"
                  stroke="#111827"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 5l7 7-7 7"
                  stroke="#111827"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </Link>

        {/* Below grid content - small intro (optional) */}
        <section className="col-span-6 mt-4 bg-white rounded-2xl p-6 shadow-sm">
          <h4 className="text-lg font-bold">Hola</h4>
          <p className="mt-2 text-gray-700">
            Este es un sistema que habla sobre la{" "}
            <span className="font-extrabold">INGENIERÍA DE SOFTWARE</span>
          </p>
        </section>
      </main>
    </div>
  );
}
