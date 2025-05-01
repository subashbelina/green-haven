import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { useCart } from '../context/CartContext'

const Header = () => {
  const { getTotalItems } = useCart()

  return (
    <header className="header">
      <div className="header-content">
        <Link to="/" className="logo">
          Green Haven
        </Link>
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/products" className="nav-link">Products</Link>
          <Link to="/cart" className="nav-link">Cart</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header; 