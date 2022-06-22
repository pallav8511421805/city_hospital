import React, { useState } from 'react';
import * as yup from 'yup';
import { ErrorMessage, Form, Formik, useFormik} from 'formik';

function Login(props) {
  const [usertype, setusertype] = useState("Log in");
  const [reset, setreset] = useState(false);

  let schema = yup.object().shape({
    email: yup.string().email("Please enter your vaild email id.").required("Please enter your email id."),
    password: yup.string().required("Please enter your password")
  });
  let screma1 =  yup.object().shape({
    name: yup.string().name("Please enter valid name"),
    email: yup.string().email("Please enter your vaild email id.").required("Please enter your email id."),
    password: yup.string().required("Please enter your password")
  });
    const formik = useFormik({
      initialValues: {
        password:'',
        email: '',
      },
      validationSchema : schema,  
      onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
      },
    }
    )
    let {errors,handleBlur,handleSubmit,touched,values ,handleChange} = formik;
  
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
          <Formik validationSchema>
          <Form onSubmit={handleSubmit} className="php-email-form">
            <>
              {
                usertype === "Log in" ? null :
                  <>
                    <div className="row justify-content-center">
                      <div className="col-md-6 form-group my-1">
                        <input type="text" name="name" className="form-control shadow-none" id="name" placeholder="Your Name" />
                      </div>
                    </div>
                    <div className="row justify-content-center">
                      <div className="col-md-6 form-group my-1">
                        <input type="email" className="form-control shadow-none" name="email" id="email" placeholder="Your Email" />
                      </div>
                    </div>

                    <div className="row justify-content-center">
                      <div className="col-md-6 form-group my-1">
                        <input type="password" name="password" className="form-control shadow-none" id="password" placeholder="Your password"/>
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
                          <input type="email" className="form-control shadow-none" name="email" id="email" placeholder="Your Email" 
                          onChange={handleChange} 
                          onBlur={handleBlur}
                          value={values.email}/>
                        </div>
                        {errors.email && touched.email ? <p className='text-center'>{errors.email}</p>: ""}
                      </div>

                      <div className="row justify-content-center">
                        <div className="col-md-6 form-group my-1">
                          <input type="password" name="password" className="form-control shadow-none" id="password" placeholder="Your password" 
                          onChange={handleChange} 
                          onBlur={handleBlur}
                          value={values.password}
                          />
                        </div>
                        {errors.password && touched.password ? <p className='text-center'>{errors.password}</p>: ""}
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
              reset ? <div className="text-center my-3"><button className="appointment-btn scrollto border-0">Change password</button></div> : usertype === "Log in" ? <div className="text-center my-3"><button className="appointment-btn scrollto border-0" type='submit'>Log in</button></div> : <div className="text-center my-3"><button className="appointment-btn scrollto border-0">Sign up</button></div>
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