import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useCart } from '../context/CartContext'; // <-- CONTEXT-A INPORTATU
import './Navbar.css';

const Navbar = () => {
  const { cart } = useCart(); // <-- SASKIAREN EGOERA LORTU

  // Saskian dagoen produktu kopuru totala kalkulatu
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          LAU-OIN
        </Link>
        <nav className="nav-menu">
          <Link to="/" className="nav-item">
            Denda
          </Link>
          <Link to="/orders" className="nav-item">
            Eskaerak
          </Link>
          <Link to="/cart" className="nav-item nav-cart">
            <FaShoppingCart />
            <span className="cart-count">{totalItems}</span> {/* KOPURUA EGUNERATU */}
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
