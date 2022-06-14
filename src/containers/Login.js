import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Login(props) {
    const [usertype,setusertype] = useState("Log in");

    return (
  <div className="container">
  <div className="section-title">
      {
        usertype === "Log in" ? <h2>Log in</h2> :
        <h2>Sign up</h2> 
      }
    </div>
    <div className="row mt-5">
      <div className="col-lg-12 mt-5 mt-lg-0">
        <div className="php-email-form">
            <>
            {
                usertype === "Log in" ? null :
                <div className="row justify-content-center">
                <div className="col-md-6 form-group my-1">
                  <input type="text" name="name" className="form-control shadow-none" id="name" placeholder="Your Name" required />
                </div>
                </div> 
            }

            <div className="row justify-content-center">
            <div className="col-md-6 form-group my-1">
              <input type="email" className="form-control shadow-none" name="email" id="email" placeholder="Your Email" required />
            </div>
          </div>
            
            <div className="row justify-content-center">
            <div className="col-md-6 form-group my-1">
              <input type="password" name="password" className="form-control shadow-none" id="password" placeholder="Your password" required />
            </div>
            </div>

             
            {
                usertype === "Log in" ? <div className="text-center my-3">
                  <NavLink className="text-dark" to={"/forgetpassword"}>Forgot password ?</NavLink></div> : null 
            }

          </>
          {
            usertype === "Log in" ? <div className="text-center my-3"><button className="appointment-btn scrollto border-0">Log in</button></div> : <div className="text-center my-3"><button className="appointment-btn scrollto border-0">Sign up</button></div> 
          }
          <div className="text-center">
          {
            usertype === "Log in" ? <p>Create a new account <span><button className="appointment-btn scrollto border-0 ms-0" onClick={()=>{setusertype("Sign up")}}>Log in</button></span></p> : <p>Already have an account? <span><button className="appointment-btn scrollto border-0 ms-0" onClick={()=>{setusertype("Log in")}}>Sign up</button></span></p>
          }
          </div>
        </div>
      </div>
    </div>
  </div>

    );
}

export default Login;