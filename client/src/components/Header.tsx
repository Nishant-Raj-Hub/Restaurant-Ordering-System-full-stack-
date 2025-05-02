import React, { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

interface HeaderProps {
  openCart: () => void;
}

const Header: React.FC<HeaderProps> = ({ openCart }) => {
  const { state } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className={`text-2xl font-bold ${isScrolled ? 'text-teal-600' : 'text-white'}`}>
              The Digital Diner
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-teal-500 transition duration-300`}>Menu</Link>
            <Link to="/orders" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-teal-500 transition duration-300`}>Orders</Link>
            <a href="#about" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-teal-500 transition duration-300`}>About</a>
            <a href="#contact" className={`${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-teal-500 transition duration-300`}>Contact</a>
            <button 
              onClick={openCart}
              className="relative bg-amber-500 text-white p-2 rounded-full hover:bg-amber-600 transition-colors"
            >
              <ShoppingCart size={20} />
              {state.items.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {state.items.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              )}
            </button>
          </nav>

          <div className="md:hidden flex items-center">
            <button 
              onClick={openCart}
              className="relative bg-amber-500 text-white p-2 rounded-full hover:bg-amber-600 transition-colors mr-4"
            >
              <ShoppingCart size={20} />
              {state.items.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {state.items.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              )}
            </button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`${isScrolled ? 'text-gray-700' : 'text-white'} p-2`}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg mt-2 rounded-lg p-4 animate-fadeIn">
            <nav className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className="text-gray-700 hover:text-teal-500 transition duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Menu
              </Link>
              <Link 
                to="/orders" 
                className="text-gray-700 hover:text-teal-500 transition duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Orders
              </Link>
              <a 
                href="#about" 
                className="text-gray-700 hover:text-teal-500 transition duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#contact" 
                className="text-gray-700 hover:text-teal-500 transition duration-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;