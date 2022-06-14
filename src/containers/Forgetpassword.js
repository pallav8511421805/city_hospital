import React from 'react';

function Forgetpassword(props) {
    return (
        <div className="container">
        <div className="section-title">
            <h2>Set password</h2>
          </div>
          <div className="row">
            <div className="col-lg-12 mt-5 mt-lg-0">
              <div className="php-email-form">
                  <>
                  <div className="row justify-content-center">
                  <div className="col-md-6 form-group my-1">
                    <input type="password" name="password" className="form-control shadow-none" id="password" placeholder="Your new password" required />
                  </div>
                  </div>
                  <div className="row justify-content-center">
                  <div className="col-md-6 form-group my-1">
                    <input type="password" name="password" className="form-control shadow-none" id="password" placeholder="Your confirm password" required />
                  </div>
                  </div>
                  <div className="text-center my-3">
                  <button className="appointment-btn scrollto border-0 ms-0">Change password</button>
                  </div>
                </>
                </div>
              </div>
            </div>
          </div>

    );
}

export default Forgetpassword;