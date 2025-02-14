import React, { useState } from 'react';
import { account } from './appwriteConfig';
import { useNavigate } from 'react-router-dom';
import logo from './logo512.png'; // Assicurati di avere il file logo.png nella cartella public o src
import './LoginPage.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await account.createEmailSession(email, password);
      navigate('/dashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="split-container">
      {/* Sezione Sinistra - Form di Login */}
      <div className="left-section">
        <div className="login-box">
          <h2>Industrial Monitoring Login</h2>
          {error && <div className="error-message">{error}</div>}
          <form onSubmit={handleLogin}>
            <div style={{ marginBottom: '1.5rem' }}>
              <label>Email</label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px',
                  marginTop: '5px',
                  border: '1px solid #ddd',
                  borderRadius: '5px'
                }}
                required
              />
            </div>

            <div style={{ marginBottom: '1.5rem' }}>
              <label>Password</label>
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{
                  width: '100%',
                  padding: '10px',
                  marginTop: '5px',
                  border: '1px solid #ddd',
                  borderRadius: '5px'
                }}
                required
              />
            </div>

            <button 
              type="submit" 
              className="login-button"
              style={{
                background: '#ff4757',
                color: 'white',
                padding: '12px 30px',
                border: 'none',
                borderRadius: '25px',
                fontSize: '16px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(255,71,87,0.3)',
                display: 'block',
                width: '100%',
                marginTop: '20px'
              }}
            >
              ACCEDI
            </button>
          </form>
        </div>
      </div>

      {/* Sezione Destra - Logo */}
      <div className="right-section">
        <img 
          src={logo} 
          alt="Logo Aziendale" 
          className="logo" 
          style={{ maxWidth: '80%', height: 'auto' }}
        />
      </div>
    </div>
  );
};

export default LoginPage;