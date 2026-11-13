import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Search, X } from "lucide-react";
import { FaYoutube, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { policies } from "../pages/policies";

const NAV_LINKS = ["Home", "Events", "Live", "Shows", "Media", "Vehicles", "Membership"];

function Logo({ className = "" }) {
  return (
    <img
      src="https://pub-dbc24446d37a40aeb1dfdd10992cd2d9.r2.dev/socialbureau-media/ROX%204X4.png"
      alt="ROX 4X4 Logo"
      className={`h-14 sm:h-20 w-auto ${className}`}
    />
  );
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#003b18] backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-5">
        <Link to="/" aria-label="ROX 4X4 home"><Logo className="text-xl" /></Link>
        <nav className="hidden items-center gap-7 text-sm font-medium text-neutral-300 lg:flex">
          {NAV_LINKS.map((link) => (
            <a key={link} href={link === "Home" ? "/" : "#"} className={`relative pb-1 transition-colors hover:text-white ${link === "Live" ? "flex items-center gap-1.5 text-white" : ""}`}>
              {link === "Live" && <span className="h-1.5 w-1.5 rounded-full bg-red-600" />}
              {link}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <button aria-label="Search" className="rounded-sm p-2 text-neutral-400 hover:text-white"><Search className="h-4 w-4" /></button>
          <a href="#" className="text-sm font-medium text-neutral-300 hover:text-white">Login</a>
          <a href="#" className="rounded-sm bg-white px-4 py-2 text-sm font-semibold text-black hover:bg-[#003b18] hover:text-white">Join Now</a>
        </div>
        <button className="p-2 text-neutral-300 lg:hidden" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu" aria-expanded={menuOpen}>
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {menuOpen && (
        <div className="border-t border-white/10 px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-4 text-sm font-medium text-neutral-300">
            {NAV_LINKS.map((link) => <a key={link} href={link === "Home" ? "/" : "#"} className="hover:text-white">{link}</a>)}
            <a href="#" className="mt-2 rounded-sm bg-white px-4 py-2 text-center text-sm font-semibold text-black">Join Now</a>
          </nav>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#003b18] px-4 py-10 sm:px-8 sm:py-12 lg:px-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="text-center sm:text-left">
            <Logo className="text-lg" />
            <p className="mt-3 text-xs text-white/80">Live. Explore. Subscribe.</p>
            <div className="mt-4 flex items-center justify-center gap-4 text-white/80 sm:justify-start">
              <FaYoutube className="h-4 w-4 hover:text-white" />
              <FaInstagram className="h-4 w-4 hover:text-white" />
              <FaFacebook className="h-4 w-4 hover:text-white" />
              <FaXTwitter className="h-4 w-4 hover:text-white" />
            </div>
          </div>
          <nav aria-label="Footer navigation" className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs text-white/80 sm:max-w-md sm:justify-end">
            {NAV_LINKS.map((link) => <a key={link} href={link === "Home" ? "/" : "#"} className="whitespace-nowrap hover:text-white">{link}</a>)}
          </nav>
          <nav aria-label="Legal and policies" className="text-center sm:text-left">
            <h2 className="text-xs font-bold uppercase tracking-widest text-white">Legal &amp; Policies</h2>
            <ul className="mt-4 space-y-3 text-xs text-white/80">
              {policies.map(({ path, title }) => <li key={path}><Link to={path} className="hover:text-white hover:underline">{title}</Link></li>)}
            </ul>
          </nav>
        </div>
        <div className="mt-10 flex flex-col items-center gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-center text-[11px] text-white/80 sm:text-left">© 2026 ROX4X4. All rights reserved.</span>
          <a href="https://trillionedition.com" target="_blank" rel="noopener noreferrer" className="inline-flex">
            <img src="https://trillionedition.com/assets/trillon-logo-w%202-CbMT1MVd.png" alt="TrillionEdition" className="h-9 w-auto" />
          </a>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[11px] text-white/80 sm:justify-end">
            <Link to="/pages/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/pages/terms-and-conditions" className="hover:text-white">Terms &amp; Conditions</Link>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
