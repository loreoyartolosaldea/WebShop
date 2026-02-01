import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const OrderSuccess = () => {
  return (
    <div className="loading-message">
      <h2>Eskerrik asko, zure eskaera ondo jaso da!</h2>
      <p>Laster zurekin harremanetan jarriko gara xehetasunak emateko.</p>
      <Link to="/" className="add-to-cart-btn" style={{textDecoration: 'none', marginTop: '2rem', display: 'inline-block'}}>
        Dendara Itzuli
      </Link>
    </div>
  );
};

export default OrderSuccess;
