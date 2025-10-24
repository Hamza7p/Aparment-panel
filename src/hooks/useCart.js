import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const useCart = () => {
  const { cartItems, setCartItems } = useContext(CartContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calculateTotal = () => {
      const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
      setTotal(totalAmount);
    };

    calculateTotal();
  }, [cartItems]);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevItems, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return {
    cartItems,
    total,
    addToCart,
    removeFromCart,
    clearCart,
  };
};

export default useCart;