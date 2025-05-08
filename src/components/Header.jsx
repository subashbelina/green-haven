import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import headerBg from '/src/assets/images/header-bg.jpg';
import { useCart } from '../context/CartContext'

const Header = () => {
  const { getTotalItems } = useCart()

  return (
    <header className="header" style={{ backgroundImage: `url(${headerBg})` }}>
      <div className="header-content">
        <Link to="/" className="logo">
          Green Haven
        </Link>
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/products" className="nav-link">Products</Link>
          <Link to="/cart" className="nav-link cart-link">
            <ShoppingCartIcon className="h-6 w-6" />
            {getTotalItems() > 0 && (
              <span className="cart-count">{getTotalItems()}</span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header; 