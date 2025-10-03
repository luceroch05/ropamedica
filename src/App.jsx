
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './componentes/NavBar';
import Footer from './componentes/Footer';
import HomePage from './HomePage';
import ProductsPage from './ProductsPage';
import UsPage from './UsPage';
import ContactUs from './ContactUs';

function App() {
  const [cart, setCart] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <NavBar cart={cart} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage cart={cart} setCart={setCart} />} />
            <Route path="/productos" element={<ProductsPage />} />
            <Route path="/nosotros" element={<UsPage />} />


            {/* /* <Route path="/nosotros" element={<Nosotros />} /> */}
            <Route path="/contacto" element={<ContactUs />} /> */
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;