import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Header from './components/Header'
import LandingPage from './pages/LandingPage'
import ProductListing from './pages/ProductListing'
import ShoppingCart from './pages/ShoppingCart'
import './App.css'

function App() {
  const isProduction = import.meta.env.PROD;
  const basename = isProduction ? '/green-haven' : '';

  return (
    <CartProvider>
      <Router basename={basename}>
        <div className="app">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/products" element={<ProductListing />} />
              <Route path="/cart" element={<ShoppingCart />} />
            </Routes>
          </main>
          <footer className="footer">
            <p>Green Haven - Version 1.0.0</p>
          </footer>
        </div>
      </Router>
    </CartProvider>
  )
}

export default App
