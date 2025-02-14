import React from 'react';
import './LoginPage.css';

function LoginPage() {
  return (
    <div className="login-container">
      <div className="login-left">
        <h1>Benvenuto</h1>
        <p>Accedi con le tue credenziali per continuare</p>
      </div>
      <div className="login-right">
        <form className="login-form">
          <h2>Accedi</h2>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Accedi</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
