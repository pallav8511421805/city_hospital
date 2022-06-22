import React, { useState } from 'react';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';

function Login(props) {
  const [usertype, setusertype] = useState("Log in");
  const [reset, setreset] = useState(false);

  let schema = yup.object().shape({
    email: yup.string().email().required(),
    password : yup.string().required()
  });

  const SignupForm = () => {
    const formik = useFormik({
      initialValues: {
        firstName: '',
        lastName: '',
        email: '',
      },
      onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
      },
    })
  }
  let[errors,handleSubmit,handleChange,values] = formik;
  return (
    <div className="container">
      <div className="section-title">
        {
          reset ? <h2>Forget password</h2> : usertype === "Log in" ? <h2>Log in</h2> :
            <h2>Sign up</h2>
        }
      </div>
      <div className="row mt-5">
        <div className="col-lg-12 mt-5 mt-lg-0">
          <Formik>
          <Form onSubmit={handleSubmit} className="php-email-form">
            <>
              {
                usertype === "Log in" ? null :
                  <>
                    <div className="row justify-content-center">
                      <div className="col-md-6 form-group my-1">
                        <input type="text" name="name" className="form-control shadow-none" id="name" placeholder="Your Name" required />
                      </div>
                    </div>
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
                  </>
              }

              {
                reset ?
                  <div className="row justify-content-center">
                    <div className="col-md-6 form-group my-1">
                      <input type="email" className="form-control shadow-none" name="email" id="email" placeholder="Your Email" required />
                    </div>
                  </div>
                  :
                  usertype == "Log in" ?
                    <>
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
                    </>
                    : null
              }

              {
                reset ? null : usertype === "Log in" ? <div className="text-center my-3">
                  <button className="appointment-btn scrollto border-0 ms-0" onClick={() => {
                    setreset(true);
                  }}>Forgot password ?</button></div> : null
              }

            </>
            {
              reset ? <div className="text-center my-3"><button className="appointment-btn scrollto border-0">Change password</button></div> : usertype === "Log in" ? <div className="text-center my-3"><button className="appointment-btn scrollto border-0">Log in</button></div> : <div className="text-center my-3"><button className="appointment-btn scrollto border-0">Sign up</button></div>
            }
            <div className="text-center">
              {
                reset ? null : usertype === "Log in" ?
                  <p>Create a new account <span>
                    <a className="appointment-btn scrollto border-0 ms-0" onClick={() => { setusertype("Sign up"); setreset(false) }}>Log in</a>
                  </span>
                  </p>
                  : <p>Already have an account? <span>
                    <a className="appointment-btn scrollto border-0 ms-0" onClick={() => { setusertype("Log in"); setreset(false) }}>Sign up</a>
                  </span></p>
              }
            </div>
          </Form>
          </Formik>
        </div>
      </div>
    </div>

  );
}

export default Login;