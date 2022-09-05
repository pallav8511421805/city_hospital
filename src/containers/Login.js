import React, { useState } from 'react'
import * as yup from 'yup'
import { Form, Formik, useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import {
  forgetpasswordaction,
  signinaction,
  signingoogle,
  signupaction,
} from '../redux/actions/signup.action'

function Login(props) {
  const [usertype, setusertype] = useState('Log in')
  const [reset, setreset] = useState(false)
  const dispatch = useDispatch()

  let initialVal
  let mainschema
  if (usertype == 'Log in' && reset === false) {
    initialVal = {
      password: '',
      email: '',
    }
    mainschema = yup.object().shape({
      email: yup
        .string()
        .email('Please enter your vaild email id.')
        .required('Please enter your email id.'),
      password: yup.string().required('Please enter your password.'),
    })
  } else if (usertype == 'Sign up' && reset === false) {
    initialVal = {
      name: '',
      password: '',
      email: '',
    }
    mainschema = yup.object().shape({
      name: yup.string().required('Please enter your name.'),
      email: yup
        .string()
        .email('Please enter your vaild email id.')
        .required('Please enter your email id.'),
      password: yup.string().required('Please enter your password.'),
    })
  } else if (reset == true) {
    initialVal = {
      email: '',
    }
    mainschema = yup.object().shape({
      email: yup
        .string()
        .email('Please enter your vaild email id.')
        .required('Please enter your email id.'),
    })
  }
  const HandlePassword = (values) => {
    console.log(values)
    dispatch(forgetpasswordaction(values))
  }
  let schema = mainschema

  const handlelogin = (values) => {
    localStorage.setItem('user', '123')
  }
  const formik = useFormik({
    initialValues: initialVal,
    validationSchema: schema,
    onSubmit: (values) => {
      if (usertype === 'Log in') {
        // handlelogin(values);
        dispatch(signinaction(values))
      } else if (reset === true) {
        // alert(JSON.stringify(values, null, 2));
        dispatch(HandlePassword(values))
      } else {
        dispatch(signupaction(values))
      }
    },
  })
  let {
    errors,
    handleBlur,
    handleSubmit,
    touched,
    values,
    handleChange,
  } = formik
  const handlegoogle = () => {
    dispatch(signingoogle())
  }
  return (
    <div className="container">
      <div className="section-title">
        {reset ? (
          <h2>Forget password</h2>
        ) : usertype === 'Log in' ? (
          <h2>Log in</h2>
        ) : (
          <h2>Sign up</h2>
        )}
      </div>
      <div className="row mt-5">
        <div className="col-lg-12 mt-5 mt-lg-0">
          <Formik validationSchema>
            <Form onSubmit={handleSubmit} className="php-email-form">
              <>
                {usertype === 'Log in' ? null : (
                  <>
                    <div className="row justify-content-center">
                      <div className="col-md-6 form-group my-1">
                        <input
                          type="text"
                          name="name"
                          className="form-control shadow-none"
                          id="name"
                          placeholder="Your Name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.name}
                        />
                      </div>
                      {errors.name || touched.name ? (
                        <p className="text-center">{errors.name}</p>
                      ) : (
                        ''
                      )}
                    </div>
                    <div className="row justify-content-center">
                      <div className="col-md-6 form-group my-1">
                        <input
                          type="email"
                          className="form-control shadow-none"
                          name="email"
                          id="email"
                          placeholder="Your Email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                        />
                      </div>
                      {errors.email && touched.email ? (
                        <p className="text-center">{errors.email}</p>
                      ) : (
                        ''
                      )}
                    </div>

                    <div className="row justify-content-center">
                      <div className="col-md-6 form-group my-1">
                        <input
                          type="password"
                          name="password"
                          className="form-control shadow-none"
                          id="password"
                          placeholder="Your password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
                        />
                      </div>
                      {errors.password && touched.password ? (
                        <p className="text-center">{errors.password}</p>
                      ) : (
                        ''
                      )}
                    </div>
                  </>
                )}

                {reset ? (
                  <div className="row justify-content-center">
                    <div className="col-md-6 form-group my-1">
                      <input
                        type="email"
                        className="form-control shadow-none"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                    </div>
                    {errors.email && touched.email ? (
                      <p className="text-center">{errors.email}</p>
                    ) : (
                      ''
                    )}
                  </div>
                ) : usertype == 'Log in' ? (
                  <>
                    <div className="row justify-content-center">
                      <div className="col-md-6 form-group my-1">
                        <input
                          type="email"
                          className="form-control shadow-none"
                          name="email"
                          id="email"
                          placeholder="Your Email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                        />
                      </div>
                      {errors.email && touched.email ? (
                        <p className="text-center">{errors.email}</p>
                      ) : (
                        ''
                      )}
                    </div>

                    <div className="row justify-content-center">
                      <div className="col-md-6 form-group my-1">
                        <input
                          type="password"
                          name="password"
                          className="form-control shadow-none"
                          id="password"
                          placeholder="Your password"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.password}
                        />
                      </div>
                      {errors.password && touched.password ? (
                        <p className="text-center">{errors.password}</p>
                      ) : (
                        ''
                      )}
                    </div>
                  </>
                ) : null}
              </>
              {reset ? (
                <div className="text-center my-3">
                  <button
                    className="appointment-btn scrollto border-0"
                    type="submit"
                  >
                    Change password
                  </button>
                </div>
              ) : usertype === 'Log in' ? (
                <div className="text-center my-3">
                  <button
                    className="appointment-btn scrollto border-0"
                    type="submit"
                  >
                    Log in
                  </button>
                </div>
              ) : (
                <div className="text-center my-3">
                  <button
                    className="appointment-btn scrollto border-0"
                    type="submit"
                  >
                    Sign up
                  </button>
                </div>
              )}
              <>
                {usertype === 'Log in' && reset === false ? (
                  <div className="text-center my-3">
                    <button
                      className="appointment-btn scrollto border-0"
                      onClick={() => handlegoogle()}
                      type="button"
                    >
                      Sign in With Google
                    </button>
                  </div>
                ) : null}
                {reset ? null : usertype === 'Log in' ? (
                  <div className="text-center my-3">
                    <button
                      className="appointment-btn scrollto border-0 ms-0"
                      onClick={() => {
                        setreset(true)
                      }}
                    >
                      Forgot password ?
                    </button>
                  </div>
                ) : null}
              </>
              <div className="text-center">
                {reset ? null : usertype === 'Log in' ? (
                  <p>
                    Create a new account{' '}
                    <span>
                      <a
                        className="appointment-btn scrollto border-0 ms-0"
                        onClick={() => {
                          setusertype('Sign up')
                          setreset(false)
                        }}
                      >
                        Log in
                      </a>
                    </span>
                  </p>
                ) : (
                  <p>
                    Already have an account?{' '}
                    <span>
                      <a
                        className="appointment-btn scrollto border-0 ms-0"
                        onClick={() => {
                          setusertype('Log in')
                          setreset(false)
                        }}
                      >
                        Sign up
                      </a>
                    </span>
                  </p>
                )}
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default Login
