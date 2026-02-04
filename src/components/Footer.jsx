import { FaXTwitter } from "react-icons/fa6";
import Logo from "../assets/logo.png"
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
export default function Footer() {
  return (
    <footer className="bg-[#081c2f] text-white mt-10">
      <div className="max-w-full mx-auto px-30 py-10 flex flex-col md:flex-row items-center justify-between gap-8">
        <Link to="/" className="flex items-center gap-2">
          <img
                      src={Logo}
                      alt="Logo"
                      className="mx-auto w-8 max-w-full"
                    />
          <span className="font-semibold text-white">
            HERO.IO
          </span>
        </Link>
        <div className="text-center md:text-right">
          <p className="text-xl text-white mb-3">Social Links</p>
          <div className="flex items-center justify-center md:justify-end gap-3">
            <a
              href="#"
              className="btn btn-circle btn-sm bg-white border-none hover:bg-white/20"
              aria-label="X"
            >
              <FaXTwitter />

            </a>
            <a
              href="#"
              className="btn btn-circle btn-sm bg-white border-none hover:bg-white/20"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
</a>
            <a
              href="#"
              className="btn btn-circle btn-sm bg-white border-none hover:bg-white/20"
              aria-label="LinkedIn"
            >
              <FaFacebookF />

            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-5 text-center text-sm opacity-70">
          Copyright © 2025 - All right reserved
        </div>
      </div>
    </footer>
  );
}
