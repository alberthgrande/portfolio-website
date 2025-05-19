import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center relative">
      <div className="text-lg font-bold">MyPortfolio</div>

      {/* Desktop menu */}
      <ul className="hidden md:flex space-x-6">
        <li>
          <a href="#home" className="hover:underline">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="hover:underline">
            About
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:underline">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </li>
      </ul>

      {/* Hamburger button */}
      <button
        className="md:hidden"
        aria-label="Toggle menu"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Hamburger icon */}
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      {/* Mobile slide-in menu */}
      <div
        className={`
          fixed top-0 right-0 h-full w-1/2 bg-blue-700 text-white
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
          md:hidden
          z-50
          shadow-lg
          p-6
          flex flex-col
        `}
      >
        <button
          className="self-end mb-4"
          aria-label="Close menu"
          onClick={() => setIsOpen(false)}
        >
          {/* Close icon */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <a
          href="#home"
          className="mb-4 hover:underline"
          onClick={() => setIsOpen(false)}
        >
          Home
        </a>
        <a
          href="#about"
          className="mb-4 hover:underline"
          onClick={() => setIsOpen(false)}
        >
          About
        </a>
        <a
          href="#projects"
          className="mb-4 hover:underline"
          onClick={() => setIsOpen(false)}
        >
          Projects
        </a>
        <a
          href="#contact"
          className="mb-4 hover:underline"
          onClick={() => setIsOpen(false)}
        >
          Contact
        </a>
      </div>

      {/* Backdrop to close menu when clicking outside */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
