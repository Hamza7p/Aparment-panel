import { useState } from 'react';

export default function CheckoutForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    cardNumber: '',
    cardExpiry: '',
    cardCVC: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="checkout-form">
      <h2>Checkout</h2>
      <div>
        <label>Name:</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </div>
      <div>
        <label>Address:</label>
        <input type="text" name="address" value={formData.address} onChange={handleChange} required />
      </div>
      <div>
        <label>City:</label>
        <input type="text" name="city" value={formData.city} onChange={handleChange} required />
      </div>
      <div>
        <label>State:</label>
        <input type="text" name="state" value={formData.state} onChange={handleChange} required />
      </div>
      <div>
        <label>ZIP Code:</label>
        <input type="text" name="zip" value={formData.zip} onChange={handleChange} required />
      </div>
      <div>
        <label>Card Number:</label>
        <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} required />
      </div>
      <div>
        <label>Card Expiry:</label>
        <input type="text" name="cardExpiry" value={formData.cardExpiry} onChange={handleChange} required />
      </div>
      <div>
        <label>Card CVC:</label>
        <input type="text" name="cardCVC" value={formData.cardCVC} onChange={handleChange} required />
      </div>
      <button type="submit">Complete Purchase</button>
    </form>
  );
}