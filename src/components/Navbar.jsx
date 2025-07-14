import React, { useState } from "react";
import useDarkMode from "../hooks/useDarkMode";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background dark:bg-darkMatte shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-gold">Sahil Lodha</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center text-base font-medium">
          {["home", "experience", "projects", "skills", "contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="text-darkNavy dark:text-textDark hover:text-gold transition"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/resume.pdf"
              download
              className="px-3 py-1 rounded border border-gold text-gold hover:bg-gold hover:text-white transition text-sm"
            >
              📄 Resume
            </a>
          </li>
          <li>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="ml-2 px-3 py-1 rounded border border-gold text-gold hover:bg-gold hover:text-white transition text-sm"
            >
              {darkMode ? "☀️ Light" : "🌙 Dark"}
            </button>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-darkNavy dark:text-textDark"
          onClick={() => setMenuOpen(true)}
        >
          <Menu size={28} />
        </button>

        {/* Mobile Sidebar */}
        <div
          className={`fixed top-0 right-0 h-full w-64 bg-background dark:bg-darkSurface shadow-lg transform ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300 z-50 md:hidden`}
        >
          <div className="flex justify-between items-center px-6 py-4 border-b border-gray-300 dark:border-gray-700">
            <span className="text-lg font-semibold text-darkNavy dark:text-textDark">Menu</span>
            <button onClick={() => setMenuOpen(false)} className="text-darkNavy dark:text-textDark">
              <X size={24} />
            </button>
          </div>
          <ul className="flex flex-col p-6 space-y-4 text-base font-medium">
            {["home", "experience", "projects", "skills", "contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className="text-darkNavy dark:text-textDark hover:text-gold transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/resume.pdf"
                download
                onClick={() => setMenuOpen(false)}
                className="block w-full text-center px-3 py-2 rounded border border-gold text-gold hover:bg-gold hover:text-white transition text-sm"
              >
                📄 Download Resume
              </a>
            </li>
            <li>
              <button
                onClick={() => {
                  setDarkMode(!darkMode);
                  setMenuOpen(false);
                }}
                className="w-full px-3 py-2 rounded border border-gold text-gold hover:bg-gold hover:text-white transition text-sm"
              >
                {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
