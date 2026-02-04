import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/logo.png";
import { FaGithub } from "react-icons/fa";

const linkClass = ({ isActive }) =>
  `px-3 py-2 text-medium font-medium transition ${
    isActive
      ? "text-purple-600 underline underline-offset-8"
      : "text-gray-700 hover:text-purple-600"
  }`;

export default function Header() {
  return (
    <header className="bg-white">
      <div className="max-w-full px-30 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
                      src={Logo}
                      alt="Logo"
                      className="mx-auto w-8 max-w-full"
                    />
          <span className="font-bold tracking-wide bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
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
          href="https://github.com/mushfiq599"
          target="_blank"
          rel="noreferrer"
          className="btn btn-sm bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white border-none rounded-md"
        >
          <FaGithub />
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
