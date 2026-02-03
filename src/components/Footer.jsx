export default function Footer() {
  return (
    <footer className="bg-[#081c2f] text-white mt-10">
      <div className="max-w-6xl mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left */}
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">
            H
          </div>
          <span className="font-semibold tracking-wide">HERO.IO</span>
        </div>

        {/* Right */}
        <div className="text-center md:text-right">
          <p className="text-sm opacity-80 mb-3">Social Links</p>
          <div className="flex items-center justify-center md:justify-end gap-3">
            <a
              href="#"
              className="btn btn-circle btn-sm bg-white/10 border-none hover:bg-white/20"
              aria-label="X"
            >
              X
            </a>
            <a
              href="#"
              className="btn btn-circle btn-sm bg-white/10 border-none hover:bg-white/20"
              aria-label="LinkedIn"
            >
              in
            </a>
            <a
              href="#"
              className="btn btn-circle btn-sm bg-white/10 border-none hover:bg-white/20"
              aria-label="Facebook"
            >
              f
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
