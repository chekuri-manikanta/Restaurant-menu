import React, { useState } from 'react';
import { Menu, ShoppingCart, X } from 'lucide-react';
import { Button } from './ui/Button';

interface NavbarProps {
  cartCount: number;
  cartTotal: number;
  onCartClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, cartTotal, onCartClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-orange-600">Manikanta</h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-orange-600">Home</a>
            <a href="#menu" className="text-gray-700 hover:text-orange-600">Menu</a>
            <a href="#about" className="text-gray-700 hover:text-orange-600">About</a>
            <a href="#contact" className="text-gray-700 hover:text-orange-600">Contact</a>
            <Button
              onClick={onCartClick}
              variant="outline"
              className="flex items-center space-x-2"
              disabled={cartCount === 0}
            >
              <ShoppingCart className="w-4 h-4" />
              <span>₹{cartTotal} ({cartCount})</span>
            </Button>
          </div>
          
          <div className="md:hidden flex items-center space-x-4">
            <Button
              onClick={onCartClick}
              variant="outline"
              className="flex items-center space-x-2"
              disabled={cartCount === 0}
            >
              <ShoppingCart className="w-4 h-4" />
              <span>₹{cartTotal}</span>
            </Button>
            <button 
              className="text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="#home"
              className="block px-3 py-2 text-gray-700 hover:text-orange-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#menu"
              className="block px-3 py-2 text-gray-700 hover:text-orange-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Menu
            </a>
            <a
              href="#about"
              className="block px-3 py-2 text-gray-700 hover:text-orange-600"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-gray-700 hover:text-orange-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;