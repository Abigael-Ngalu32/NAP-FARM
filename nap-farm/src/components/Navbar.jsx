import { useState } from "react";
import { useCart } from "./CartContext";

export default function Navbar() {
  const { cart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-yellow-500 p-4 shadow relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl text-white font-bold">PoultryHelp</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-white font-semibold">
          <li>Home</li>
          <li>Breeds</li>
          <li>About</li>
          <li>Contact</li>
        </ul>

        {/* Cart & Hamburger */}
        <div className="flex items-center gap-4">
          <span className="text-white font-semibold">Cart: {cart.length}</span>

          {/* Hamburger Icon */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-yellow-400 text-white font-semibold flex flex-col gap-4 p-4 absolute w-full left-0 top-full shadow-lg">
          <li onClick={() => setIsOpen(false)}>Home</li>
          <li onClick={() => setIsOpen(false)}>Breeds</li>
          <li onClick={() => setIsOpen(false)}>About</li>
          <li onClick={() => setIsOpen(false)}>Contact</li>
        </ul>
      )}
    </nav>
  );
}
