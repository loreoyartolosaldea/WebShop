import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../App.css';

const Cart = () => {
  const { cart, clearCart } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return <div className="loading-message">Saskia hutsik dago.</div>;
  }

  const handleCheckout = () => {
    // Etorkizunean hemen ordainketa-pasabidearekin konektatuko litzateke
    console.log("Eskaera prozesatzen...", cart);
    // 1. Saskia hustu
    clearCart();
    // 2. Berrespen-orrira bideratu
    navigate('/order-success');
  };

  const totalCost = cart.reduce((total, item) => total + item.prezioa * item.quantity, 0);

  return (
    <div className="cart-page">
      <h2>Zure Saskia</h2>
      <div className="cart-items-container">
        {cart.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.irudi_urla} alt={item.izena} className="cart-item-image" />
            <div className="cart-item-details">
              <h3>{item.izena}</h3>
              <p>Prezioa: {item.prezioa.toFixed(2)}€</p>
              <p>Kopurua: {item.quantity}</p>
            </div>
            <p className="cart-item-total">
              Guztira: {(item.prezioa * item.quantity).toFixed(2)}€
            </p>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h3>Totala: {totalCost.toFixed(2)}€</h3>
        <button className="checkout-btn" onClick={handleCheckout}>
            Ordainketa Egin
        </button>
      </div>
    </div>
  );
};

export default Cart;
