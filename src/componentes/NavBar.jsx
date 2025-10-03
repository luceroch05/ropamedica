import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X, Heart } from 'lucide-react';

const NavBar = ({ cart, menuOpen, setMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/70 backdrop-blur-xl shadow-lg border-b border-blue-100/50' 
        : 'bg-white/50 backdrop-blur-md'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center space-x-3">
            <div className="relative group">
              <div className={`absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-2xl blur-md opacity-50 group-hover:opacity-75 transition ${
                scrolled ? 'opacity-75' : ''
              }`}></div>
              <div className="relative w-12 h-12 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center shadow-lg">
                <div className="w-8 h-8 border-3 border-white rounded-lg"></div>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-800">MediStyle</h1>
              <p className="text-xs text-blue-600 font-medium">Professional Medical Wear</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="text-slate-700 hover:text-blue-600 transition font-medium relative group">
              Inicio
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/productos" className="text-slate-700 hover:text-blue-600 transition font-medium relative group">
              Productos
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            {/* <a href="#colecciones" className="text-slate-700 hover:text-blue-600 transition font-medium relative group">
              Colecciones
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
            </a> */}
            <Link to="/nosotros" className="text-slate-700 hover:text-blue-600 transition font-medium relative group">
              Sobre Nosotros
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/contacto" className="text-slate-700 hover:text-blue-600 transition font-medium relative group">
              Contacto
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>

          <div className="flex items-center space-x-3">
            <button className="hidden md:flex items-center space-x-2 px-4 py-2 bg-slate-100/80 hover:bg-slate-200/80 backdrop-blur-sm rounded-full transition">
              <Search className="w-4 h-4 text-slate-600" />
              <span className="text-sm text-slate-600">Buscar</span>
            </button>
            <button className="p-2 hover:bg-blue-50/80 backdrop-blur-sm rounded-full transition relative group">
              <Heart className="w-5 h-5 text-slate-600 group-hover:text-red-500 transition" />
            </button>
            <button className="p-2 hover:bg-blue-50/80 backdrop-blur-sm rounded-full transition relative group">
              <ShoppingCart className="w-5 h-5 text-slate-600 group-hover:text-blue-600 transition" />
              {cart.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold shadow-lg animate-pulse">
                  {cart.length}
                </span>
              )}
            </button>
            <button 
              className="lg:hidden p-2"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden bg-white/90 backdrop-blur-xl border-t border-blue-100/50 animate-slideDown">
          <div className="px-4 py-4 space-y-3">
            <Link to="/" className="block text-slate-700 hover:text-blue-600 font-medium py-2 hover:pl-2 transition-all" onClick={() => setMenuOpen(false)}>
              Inicio
            </Link>
            <Link to="/productos" className="block text-slate-700 hover:text-blue-600 font-medium py-2 hover:pl-2 transition-all" onClick={() => setMenuOpen(false)}>
              Productos
            </Link>
            {/* <a href="#colecciones" className="block text-slate-700 hover:text-blue-600 font-medium py-2 hover:pl-2 transition-all">
              Colecciones
            </a> */}
            <Link to="/nosotros" className="block text-slate-700 hover:text-blue-600 font-medium py-2 hover:pl-2 transition-all" onClick={() => setMenuOpen(false)}>
              Sobre Nosotros
            </Link>
            <Link to="/contacto" className="block text-slate-700 hover:text-blue-600 font-medium py-2 hover:pl-2 transition-all" onClick={() => setMenuOpen(false)}>
              Contacto
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;