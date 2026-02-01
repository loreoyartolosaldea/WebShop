import React from 'react';
import { useCart } from '../context/CartContext';
import '../App.css';

const Orders = () => {
  const { orders } = useCart();

  if (orders.length === 0) {
    return <div className="loading-message">Oraindik ez duzu eskaerarik egin.</div>;
  }

  return (
    <div className="cart-page"> {/* Estiloa berrerabiltzeko */} 
      <h2>Zure Eskaerak</h2>
      {orders.map(order => (
        <div key={order.id} className="cart-item" style={{flexDirection: 'column', alignItems: 'flex-start', marginBottom: '2rem'}}>
          <h4>Eskaera #{order.id} - {new Date(order.date).toLocaleDateString()}</h4>
          {order.items.map(item => (
            <div key={item.id} style={{paddingLeft: '1rem', borderLeft: '2px solid #eee', marginLeft: '1rem', width: '100%'}}>
                <p>{item.izena} (x{item.quantity}) - {(item.prezioa * item.quantity).toFixed(2)}€</p>
            </div>
          ))}
          <h4 style={{alignSelf: 'flex-end', marginTop: '1rem'}}>Totala: {order.total.toFixed(2)}€</h4>
        </div>
      ))}
    </div>
  );
};

export default Orders;
