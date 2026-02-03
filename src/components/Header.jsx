import { Link, NavLink } from "react-router-dom";

const linkClass = ({ isActive }) =>
  `px-3 py-2 text-sm font-medium transition ${
    isActive
      ? "text-purple-600 underline underline-offset-8"
      : "text-gray-700 hover:text-purple-600"
  }`;

export default function Header() {
  return (
    <header className="bg-white border-b">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">
            H
          </div>
          <span className="font-semibold tracking-wide text-gray-900">
            HERO.IO
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-2">
          <NavLink to="/" end className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/apps" className={linkClass}>
            Apps
          </NavLink>
          <NavLink to="/installation" className={linkClass}>
            Installation
          </NavLink>
        </nav>

        {/* Contribute */}
        <a
          href="https://github.com/YOUR_GITHUB_USERNAME"
          target="_blank"
          rel="noreferrer"
          className="btn btn-sm bg-purple-600 hover:bg-purple-700 text-white border-none rounded-md"
        >
          Contribute
        </a>
      </div>

      {/* Mobile Nav */}
      <div className="md:hidden px-4 pb-3 flex items-center gap-2">
        <NavLink to="/" end className={linkClass}>
          Home
        </NavLink>
        <NavLink to="/apps" className={linkClass}>
          Apps
        </NavLink>
        <NavLink to="/installation" className={linkClass}>
          Installation
        </NavLink>
      </div>
    </header>
  );
}
