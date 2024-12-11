import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Masuk() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = formData;

    // Basic form validation
    if (!username || !password) {
      setError('Username and password are required');
      return;
    }

    try {
      // Send the login request to the backend
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.text();

      if (response.ok) {
        alert(result); // On success, show success message
        // Redirect to another page after successful login
        navigate('/EksplorasiLogin'); // Correct the route path here
      } else {
        setError(result); // Set the error state with the error message
      }
    } catch (error) {
      setError('Error during login');
    }
  };

  return (
    <div>
      <a href="/LandingPage" className="back-link">
        <img src="/assets/images/arrow-left.png" alt="back" width="47px" className="back" />
      </a>
      <div className="container">
        <div className="logo">
          <img src="/assets/images/logo-rubiks.png" alt="Logo" />
        </div>

        <div className="login-form">
          <h2>MASUK</h2>
          {error && <div className="error-message">{error}</div>} {/* Display error messages */}
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              onChange={handleChange}
              required
            />
            <label htmlFor="password">Password</label>
            <div className="password-container">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                required
              />
              <span className="toggle-password"></span>
            </div>
            <div className="button">
              <button type="submit" className="btn-auth">Masuk</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Masuk;
