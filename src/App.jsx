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
   const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((item) => item.id === product.id);
      if (existing) {
        // aumenta cantidad si ya existe
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      // si no existe, lo agrega con cantidad inicial = 1
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };
 

  return (
    // 👇 Aquí va el basename
    <Router basename="/ropamedica">
      <div className="flex flex-col min-h-screen">
        <NavBar cart={cart} setCart={setCart}  menuOpen={menuOpen} 
          setMenuOpen={setMenuOpen} 
         />
        
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={<HomePage cart={cart} setCart={setCart} addToCart={addToCart} />}
            />
            <Route path="/productos" element={<ProductsPage  cart={cart} setCart={setCart} addToCart={addToCart} />} />
            <Route path="/nosotros" element={<UsPage />} />
            <Route path="/contacto" element={<ContactUs />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
