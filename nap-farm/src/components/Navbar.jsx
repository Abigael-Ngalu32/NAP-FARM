import { useState } from "react";
import { useCart } from "./CartContext";

export default function Navbar() {
  const { cart } = useCart();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const menuItems = ["Home", "Breeds", "About", "Contact"];

  return (
    <nav className="bg-yellow-500 p-4 shadow relative">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl text-white font-bold">Nap Farm</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-white font-semibold">
          {menuItems.map((item) => (
            <li key={item} className="cursor-pointer hover:text-yellow-200 transition">
              {item}
            </li>
          ))}
        </ul>

        {/* Cart & Hamburger */}
        <div className="flex items-center gap-4">
          <span className="text-white font-semibold">Cart: {cart.length}</span>

          {/* Hamburger Icon */}
          <button
            aria-label="Toggle menu"
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
        <ul className="md:hidden bg-yellow-400 text-white font-semibold flex flex-col gap-4 p-4 absolute w-full left-0 top-full shadow-lg transition-all duration-300 ease-in-out">
          {menuItems.map((item) => (
            <li
              key={item}
              onClick={() => setIsOpen(false)}
              className="cursor-pointer hover:text-yellow-200 transition"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}


