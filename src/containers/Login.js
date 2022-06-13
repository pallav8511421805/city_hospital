import React from 'react';

function Login(props) {
    return (
  <div className="container">
  <div className="section-title">
      <h2>Contact</h2>
    </div>
    <div className="row mt-5">
      <div className="col-lg-12 mt-5 mt-lg-0">
        <div className="php-email-form">
            <>
          <div className="row justify-content-center">
            <div className="col-md-6 form-group">
              <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
            </div>
            </div>
             <div className="row justify-content-center">
            <div className="col-md-6 form-group mt-3 mt-md-0">
              <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
            </div>
          </div>
          </>
          <div className="text-center my-3"><button class="appointment-btn scrollto border-0">Log in</button></div>
        </div>
      </div>
    </div>
  </div>

    );
}

export default Login;