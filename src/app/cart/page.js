import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import CartSummary from '../../components/CartSummary';

export default function CartPage() {
  const { cartItems, totalAmount } = useContext(CartContext);

  return (
    <div className="cart-page">
      <h1>Your Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <CartSummary items={cartItems} totalAmount={totalAmount} />
          <button className="checkout-button">Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
}