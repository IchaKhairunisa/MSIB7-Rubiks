import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Importing useNavigate

const Daftar = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();  // Initialize navigate hook

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, email, password } = formData;

    // Basic form validation
    if (!username || !email || !password) {
      alert('All fields are required');
      return;
    }

    // Send data to backend
    try {
      const response = await fetch('http://localhost:5000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.text();
      alert(result); // Alert the response from backend

      // Redirect to the "Masuk" page after successful registration
      if (response.ok) {
        navigate('/Masuk');  // This will navigate to the Masuk page
      }
    } catch (error) {
      alert('Error during registration');
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
          <h2>DAFTAR</h2>
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

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              required
            />

            <label htmlFor="password">Password</label>
            <div className="password-container">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Minimal 8 Karakter"
                onChange={handleChange}
                required
              />
            </div>

            <div className="button-container">
              <button type="submit" className="signup-btn">DAFTAR</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Daftar;
