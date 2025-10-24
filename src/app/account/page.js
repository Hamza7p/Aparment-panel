import React from 'react';

const AccountPage = () => {
  return (
    <div className="account-page">
      <h1>Your Account</h1>
      <p>Manage your account details and preferences here.</p>
      <div className="account-details">
        {/* Account details form can be added here */}
      </div>
      <div className="account-actions">
        <h2>Actions</h2>
        <ul>
          <li><a href="/account/orders">View Orders</a></li>
          <li><a href="/auth/login">Logout</a></li>
        </ul>
      </div>
    </div>
  );
};

export default AccountPage;