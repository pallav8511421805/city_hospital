import React from 'react';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';

function Contacts(props) {

  let schema = yup.object().shape({
    message: yup.string().required("Please enter your message."),
    subject: yup.string().required("Please enter your subject."),
    name: yup.string().required("Please enter your name."),
    email: yup.string().email("Please enter your vaild email id.").required("Please enter your email id."),        
})

const formik = useFormik({
    initialValues: {
        name: '',
        email: '',
        subject: '',
    },
    validationSchema: schema,
    onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
    },
})
let { errors, handleBlur, handleSubmit, handleChange , touched, values} = formik;
    return (
<div>
  <main id="main">
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-title">
          <h2>Contact</h2>
          <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
            blandit quam volutpat sollicitudin. Aenean ac turpis ante. Mauris velit sapien, aliquet aliquet rhoncus quis,
            luctus at neque. Mauris sit amet massa sed orci vehicula facilisis.</p>
        </div>
      </div>
      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-4">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt" />
                <h4>Location:</h4>
                <p> F-505, Inovative Plazza New Delhi, India</p>
              </div>
              <div className="email">
                <i className="bi bi-envelope" />
                <h4>Email:</h4>
                <p>cityhospital@example.com</p>
              </div>
              <div className="phone">
                <i className="bi bi-phone" />
                <h4>Call:</h4>
                <p>+91 9988776655</p>
              </div>
            </div>
          </div>
          <div className="col-lg-8 mt-5 mt-lg-0">
            <Formik validationSchema>
            <Form onSubmit={handleSubmit} className="php-email-form">
              <div className="row">
                <div className="col-md-6 form-group">
                  <input type="text" 
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  name="name" className="form-control" id="name" placeholder="Your Name"/>
                   {errors.name || touched.name ? <p className='text-center'>{errors.name}</p> : ""}
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <input type="email" 
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className="form-control" name="email" id="email" placeholder="Your Email" />
                  {errors.email && touched.email ? <p className='text-center'>{errors.email}</p> : ""}
                </div>
              </div>
              <div className="form-group mt-3">
                <input type="text" 
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.subject}
                className="form-control" name="subject" id="subject" placeholder="Subject"/>
                {errors.subject && touched.subject ? <p className='text-center'>{errors.subject}</p> : ""}
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
                name="message" rows={5} placeholder="Message" defaultValue={""} />
                {errors.message && touched.message ? <p className='text-center'>{errors.message}</p> : ""}
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message" />
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type='submit'>Send Message</button></div>
            </Form>
            </Formik>
          </div>
        </div>
      </div>
    </section>
  </main>
</div>

    );
}

export default Contacts;