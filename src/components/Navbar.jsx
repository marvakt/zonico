import { useState } from "react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#services", label: "Services" },
  { href: "#works", label: "Works" },
  { href: "#contact", label: "Contact" },
];

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="sticky top-0 z-40 border-b border-white/40 bg-white/80 px-4 py-4 backdrop-blur-xl shadow-sm">
      <div className="mx-auto max-w-6xl rounded-2xl border border-slate-200/70 bg-white/70 px-5 py-3 shadow-[0_10px_40px_rgba(15,23,42,0.06)]">
        <div className="flex items-center justify-between">
        <a href="#home" className="text-xl font-black tracking-tight text-slate-900">
          Zonico<span className="text-cyan-600">.</span>
        </a>

        <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="transition hover:text-cyan-700">
              {link.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          className="inline-flex items-center rounded-lg border border-slate-300 px-3 py-2 text-slate-700 transition hover:bg-slate-100 md:hidden"
        >
          <span className="text-sm font-semibold">Menu</span>
        </button>
        </div>

        {isMenuOpen && (
          <div className="mt-3 grid gap-2 border-t border-slate-200 pt-3 text-sm font-medium text-slate-700 md:hidden">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-lg px-3 py-2 transition hover:bg-slate-100 hover:text-cyan-700"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;