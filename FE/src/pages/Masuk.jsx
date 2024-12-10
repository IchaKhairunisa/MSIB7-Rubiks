import React from 'react'

function Masuk() {
  return (
    <div>
      <a href="/LandingPage" className='back-link'>
        <img src="/assets/images/arrow-left.png" alt="back" width="47px" className="back"/>
      </a>
      <div className="container">
        {/* Logo Section */}
        <div className="logo">
          <img src="/assets/images/logo-rubiks.png" alt="Logo" />
        </div>

        {/* Login Form Section */}
        <div className="login-form rounded-lg">
          <h2>Login</h2>
          <form>
            <label for="username">Username</label>
            <input type="text" id="username" name="username" placeholder="Username" />
            <label for="password">Password</label>
            <div className="password-container">
              <input type="password" id="password" name="password" placeholder="Password" />
              <span className="toggle-password"></span>
            </div>
            <a href="/">
              <div className="mt-2">
                {/* <button type="submit" className="btn-auth" fdprocessedid="tu8yk">MASUK</button> */}
                <button type="submit" className="btn-aut w-full bg-Green text-white p-2 rounded-lg hover:font-bold">Masuk</button>
              </div>
              <div className='mt-5'>
              <p className='text-center text-white text-sm'>Kamu Belum Punya Akun? <a href="/Daftar" className='text-Green hover:font-bold'>DAFTAR</a></p>
              </div>
            </a>
          </form>
        </div>
      </div>
    </div>

    // <div id="app">
    //   <main className="py-4">
    //     <div className="container-auth">
    //       <a href="/LandingPage">
    //         <img src="/assets/images/arrow-left.png" alt="back" width="47px" className="back"/>
    //       </a>
    //       <div className="header-content mt-4 d-flex">
    //         {/* Wrapping logo and form inside a container to place them side by side */}
    //         <div className="logo-container">
    //           <img src="/assets/images/logo-rubiks.png" alt="logo" width="182px"/>
    //         </div>
    //         <div className="box-form mt-2">
    //           <h3>MASUK</h3>
    //           <form action="/Masuk" method="POST" className="mt-5">
    //             <input type="hidden" name="_token" value="ROwWe4aM67NQH3Ktv9HH10ZtlIIyhZqGSJH2LtgQ" autoComplete="off"/>
    //             <div className="mb-4 w-100">
    //               <label for="email">Email Address</label>
    //               <input id="email" type="email" className="form-control " name="email" value="" required="" autoComplete="email"/>
    //             </div>
    //             <div className="mb-4 w-100">
    //               <label for="password">Password</label>
    //               <div className="pass">
    //                 <input id="password" type="password" className="form-control " name="password" required="" autoComplete="current-password"/>
    //                 <span toggle="#password" className="fa fa-fw fa-eye field-icon toggle-password"></span>
    //               </div>
    //             </div>
    //             <div className="button">
    //               <button type="submit" className="btn-auth">
    //                 MASUK
    //               </button>
    //               <a href="/Daftar" className="btn-auth">DAFTAR</a>
    //             </div>
    //           </form>
    //         </div>
    //       </div>
    //     </div>
    //   </main>
    // </div>
  )
}

export default Masuk;