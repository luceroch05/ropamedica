import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X, Trash2, Plus, Minus } from 'lucide-react';

const NavBar = ({ cart, setCart, menuOpen, setMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 🔹 Aumentar cantidad
  const increaseQuantity = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity = (updatedCart[index].quantity || 1) + 1;
    setCart(updatedCart);
  };

  // 🔹 Disminuir cantidad (si llega a 0, eliminar producto)
  const decreaseQuantity = (index) => {
    const updatedCart = [...cart];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
    } else {
      updatedCart.splice(index, 1);
    }
    setCart(updatedCart);
  };

  // 🔹 Eliminar directamente
  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/70 backdrop-blur-xl shadow-lg border-b border-blue-100/50'
          : 'bg-white/50 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="relative group">
              <div
                className={`absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-400 rounded-2xl blur-md opacity-50 group-hover:opacity-75 transition ${
                  scrolled ? 'opacity-75' : ''
                }`}
              ></div>
              <div className="relative w-12 h-12 bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-400 rounded-2xl flex items-center justify-center shadow-lg">
                <div className="w-8 h-8 border-3 border-white rounded-lg"></div>
              </div>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-800">MediStyle</h1>
              <p className="text-xs text-blue-600 font-medium">
                Professional Medical Wear
              </p>
            </div>
          </Link>

          {/* Links Desktop */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="navlink">
              Inicio
            </Link>
            <Link to="/productos" className="navlink">
              Productos
            </Link>
            <Link to="/nosotros" className="navlink">
              Sobre Nosotros
            </Link>
            <Link to="/contacto" className="navlink">
              Contacto
            </Link>
          </nav>

          {/* Acciones */}
          <div className="flex items-center space-x-3">
            <button className="hidden md:flex items-center space-x-2 px-4 py-2 bg-slate-100/80 hover:bg-slate-200/80 backdrop-blur-sm rounded-full transition">
              <Search className="w-4 h-4 text-slate-600" />
              <span className="text-sm text-slate-600">Buscar</span>
            </button>

            {/* Carrito */}
            <div className="relative">
              <button
                onClick={() => setCartOpen(!cartOpen)}
                className="p-2 hover:bg-blue-50/80 backdrop-blur-sm rounded-full transition relative group"
              >
                <ShoppingCart className="w-5 h-5 text-slate-600 group-hover:text-blue-600 transition" />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-semibold shadow-lg animate-pulse">
                    {cart.reduce((acc, item) => acc + (item.quantity || 1), 0)}
                  </span>
                )}
              </button>

              {/* Panel Carrito */}
              {cartOpen && (
                <div className="absolute right-0 mt-3 w-96 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-blue-100 overflow-hidden animate-fadeIn">
                  {/* Header */}
                  <div className="p-4 border-b border-slate-200 flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-slate-800">
                      Tu Carrito
                    </h3>
                    <button onClick={() => setCartOpen(false)}>
                      <X className="w-5 h-5 text-slate-600 hover:text-red-500 transition" />
                    </button>
                  </div>

                  {/* Items */}
                  <div className="max-h-72 overflow-y-auto divide-y divide-slate-200">
                    {cart.length > 0 ? (
                      cart.map((item, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 p-4 hover:bg-slate-50 transition"
                        >
                          {/* Imagen */}
                          <div className="w-16 h-16 rounded-xl overflow-hidden bg-slate-100 flex items-center justify-center shadow-md">
                            <img
                              src={
                                item.image ||
                                'https://via.placeholder.com/80x80.png?text=Producto'
                              }
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          {/* Info */}
                          <div className="flex-1">
                            <p className="text-sm font-medium text-slate-800">
                              {item.name}
                            </p>
                            <p className="text-xs text-slate-500">
                              S/. {item.price}
                            </p>

                            {/* Controles cantidad */}
                            <div className="flex items-center gap-2 mt-1">
                              <button
                                onClick={() => decreaseQuantity(index)}
                                className="p-1 rounded-full bg-slate-100 hover:bg-slate-200"
                              >
                                <Minus className="w-4 h-4 text-slate-600" />
                              </button>
                              <span className="px-2 font-semibold text-slate-700">
                                {item.quantity || 1}
                              </span>
                              <button
                                onClick={() => increaseQuantity(index)}
                                className="p-1 rounded-full bg-slate-100 hover:bg-slate-200"
                              >
                                <Plus className="w-4 h-4 text-slate-600" />
                              </button>
                            </div>
                          </div>

                          {/* Botón eliminar */}
                          <button
                            onClick={() => removeFromCart(index)}
                            className="p-2 hover:bg-red-100 rounded-full transition"
                          >
                            <Trash2 className="w-4 h-4 text-red-500" />
                          </button>
                        </div>
                      ))
                    ) : (
                      <p className="p-6 text-center text-slate-500">
                        Tu carrito está vacío
                      </p>
                    )}
                  </div>

                  {/* Footer con total */}
                  {cart.length > 0 && (
                    <div className="p-4 border-t border-slate-200 space-y-3">
                      <div className="flex justify-between text-slate-700 font-semibold">
                        <span>Total</span>
                        <span>
                          S/.{' '}
                          {cart
                            .reduce(
                              (acc, item) =>
                                acc + item.price * (item.quantity || 1),
                              0
                            )
                            .toFixed(2)}
                        </span>
                      </div>
                      <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-2 rounded-xl font-semibold shadow-lg hover:scale-[1.02] active:scale-[0.98] transition">
                        Finalizar compra
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Botón menú móvil */}
           <button
            className="lg:hidden p-2 rounded-full hover:bg-slate-100 transition"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-white/95 backdrop-blur-xl shadow-2xl border-t border-blue-200 animate-slideDown rounded-b-2xl z-40">
          <div className="flex flex-col divide-y divide-blue-100">
            <Link
              to="/"
              className="px-6 py-4 text-slate-700 font-semibold hover:bg-blue-50 hover:text-blue-600 active:bg-blue-100 transition-all"
              onClick={() => setMenuOpen(false)}
            >
              Inicio
            </Link>
            <Link
              to="/productos"
              className="px-6 py-4 text-slate-700 font-semibold hover:bg-blue-50 hover:text-blue-600 active:bg-blue-100 transition-all"
              onClick={() => setMenuOpen(false)}
            >
              Productos
            </Link>
            <Link
              to="/nosotros"
              className="px-6 py-4 text-slate-700 font-semibold hover:bg-blue-50 hover:text-blue-600 active:bg-blue-100 transition-all"
              onClick={() => setMenuOpen(false)}
            >
              Sobre Nosotros
            </Link>
            <Link
              to="/contacto"
              className="px-6 py-4 text-slate-700 font-semibold hover:bg-blue-50 hover:text-blue-600 active:bg-blue-100 transition-all"
              onClick={() => setMenuOpen(false)}
            >
              Contacto
            </Link>
          </div>
        </div>
      )}

    </header>
  );
};

export default NavBar;
