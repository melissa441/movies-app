
import { Sun, Moon, Menu, X } from "lucide-react";
import { useState } from "react";
import { useDarkMode } from "../hooks/useDarkMode";

export default function Header() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-white dark:bg-black transition-colors duration-200 px-4 sm:px-6 lg:px-12 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div>
          <img src="/Group 1.png" alt="logo" />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-pink-500 font-medium">
            Home
          </a>
          <div className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors flex gap-10 items-center">
          <a href="#" >
            Explore
          </a>
          <a href="#">
            Genre
          </a>
          <a href="#">
            News
          </a>
          <a href="#">
            Movies
          </a>
          <a href="#">
            TV Shows
          </a>
          </div>
        </nav>

        {/* Right side - Dark mode toggle and mobile menu button */}
        <div className="flex items-center space-x-2">
          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <Sun className="w-5 h-5 text-yellow-500" />
            ) : (
              <Moon className="w-5 h-5 text-gray-600" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            ) : (
              <Menu className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700">
          <nav className="flex flex-col space-y-4 pt-4">
            <a
              href="#"
              className="text-pink-500 font-medium px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Explore
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Genre
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              News
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Movies
            </a>
            <a
              href="#"
              className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white px-4 py-2 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              TV Shows
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
