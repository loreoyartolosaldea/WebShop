import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const OrderSuccess = () => {
  return (
    <div className="cart-page" style={{textAlign: 'center'}}>
      <h2 style={{color: '#2ecc71'}}>✓ Eskerrik asko!</h2>
      <p>Zure eskaera ondo jaso da. Laster prozesatuko dugu.</p>
      <p>Zure eskaeren egoera "Eskaerak" atalean kontsulta dezakezu.</p>
      <Link to="/" className="add-to-cart-btn" style={{textDecoration: 'none', display: 'inline-block', marginTop: '1rem', marginRight: '1rem'}}>
        Dendara Itzuli
      </Link>
      <Link to="/orders" className="checkout-btn" style={{textDecoration: 'none', display: 'inline-block', marginTop: '1rem'}}>
        Nire Eskaerak Ikusi
      </Link>
    </div>
  );
};

export default OrderSuccess;
