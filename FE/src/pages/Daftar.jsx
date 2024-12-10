import React from 'react'

function Daftar() {
  return (
    <div>
      <a href="/LandingPage" className="back-link">
        <img src="/assets/images/arrow-left.png" alt="back" width="47px" className="back" />
      </a>
      <div className="container">
        {/* <!-- Logo Section --> */}
        <div className="logo">
          <img src="/assets/images/logo-rubiks.png" alt="Logo" className="w-full h-auto" />
        </div>

        {/* <!-- Daftar Form Section --> */}
        <div className="login-form">
          <h2>DAFTAR</h2>
          <form>
            <label for="username">Username</label>
            <input type="text" id="username" name="username" placeholder="Username" />

            <label for="email">email</label>
            <input type="email" id="email" name="email" placeholder="Email" />

            <label for="password">Password</label>
            <div className="password-container">
              <input type="password" id="password" name="password" placeholder="Minimal 8 Karakter" />
              <span className="toggle-password"></span>
            </div>

            <div className="button-container">
              <a href="/Masuk"><button type="button" className="signup-btn">DAFTAR</button></a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Daftar;
