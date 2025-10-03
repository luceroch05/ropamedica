import React, { useState } from 'react';
import Navbar from './componentes/NavBar';
import Footer from './componentes/Footer';

const Layout = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar cart={cart} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      
      <main className="flex-grow">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;