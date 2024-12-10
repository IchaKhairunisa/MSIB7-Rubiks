import React from 'react';

function Daftar() {
  return (
    <div>
      <a href="/LandingPage" className="back-link">
        <img src="/assets/images/arrow-left.png" alt="back" width="47px" className="back" />
      </a>
      <div className="container">
        {/* Logo Section */}
        <div className="logo">
          <img src="/assets/images/logo-rubiks.png" alt="Logo" className="w-full h-auto" />
        </div>

        {/* Daftar Form Section */}
        <div className="login-form rounded-lg">
          <h2 className="text-2xl font-bold mb-4">DAFTAR</h2>
          <form>
            <label htmlFor="username" className="block text-sm font-medium mb-1">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              className="w-full border border-gray-300 rounded-lg p-2 mb-4"
            />

            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-lg p-2 mb-4"
            />

            <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
            <div className="password-container mb-2">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Minimal 8 Karakter"
                className="w-full border border-gray-300 rounded-lg p-2"
              />
            </div>

            <div className="button-container">
              <button
                type="button"
                className="w-full bg-Green hover:bg-Dark hover:text-Green py-1 text-white rounded-lg font-bold text-md "
              >
                DAFTAR
              </button>
              
            </div>
            <div className='text-center mt-3'>
              <p className='text-sm text-white'>Sudah punya akun? <a href="/Masuk" className='text-Green'>Masuk</a></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Daftar;
