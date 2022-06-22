import React from 'react';
import * as yup from 'yup';
import { ErrorMessage, Form, Formik, useFormik} from 'formik';

function Appoiment(props) {
    let schema = yup.object().shape({
        phone: yup.number().required("Please enter your phone number."),
        name: yup.string().required("Please enter your name."),
        email: yup.string().email("Please enter your vaild email id.").required("Please enter your email id.")
      });;

    const formik = useFormik({
      initialValues: {
        phone:'',
        name:'',
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
        <>
<main id="main">
  <section id="appointment" className="appointment">
    <div className="container">
      <div className="section-title">
        <h2>Make an Appointment</h2>
        <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
          blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
          Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>
      </div>
      <Formik validationSchema>
      <Form onSubmit={handleSubmit} className="php-email-form">
        <div className="row">
          <div className="col-md-4 form-group">
            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name"/>
            <div className="validate" 
            onChange={handleChange} 
            onBlur={handleBlur}
            value={values.name}
            />
           {errors.name || touched.name ? <p>{errors.name}</p>: ""}

          </div>
          <div className="col-md-4 form-group mt-3 mt-md-0">
            <input type="email" className="form-control" name="email" id="email" placeholder="Your Email"/>
            <div className="validate" 
            onChange={handleChange} 
            onBlur={handleBlur}
            value={values.email}
            />
           {errors.email && touched.email ? <p>{errors.email}</p>: ""}
          </div>
          <div className="col-md-4 form-group mt-3 mt-md-0">
            <input type="tel" className="form-control" name="phone" id="phone" placeholder="Your Phone" maxLength={10}/>
            <div className="validate" 
            onChange={handleChange} 
            onBlur={handleBlur}
            value={values.phone}
            />
          </div>
          {errors.phone && touched.phone ? <p>{errors.phone}</p>: ""}
        </div>
        <div className="row">
          <div className="col-md-4 form-group mt-3">
            <input type="datetime" name="date" className="form-control datepicker" id="date" placeholder="Appointment Date" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
            <div className="validate" />
          </div>
          <div className="col-md-4 form-group mt-3">
            <select name="department" id="department" className="form-select">
              <option value>Select Department</option>
              <option value="Department 1">Department 1</option>
              <option value="Department 2">Department 2</option>
              <option value="Department 3">Department 3</option>
            </select>
            <div className="validate" />
          </div>
        </div>
        <div className="form-group mt-3">
          <textarea className="form-control" name="message" rows={5} placeholder="Message (Optional)" defaultValue={""} />
          <div className="validate" />
        </div>
        <div className="mb-3">
          <div className="loading">Loading</div>
          <div className="error-message" />
          <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
        </div>
        <div className="text-center"><button type="submit">Make an Appointment</button></div>
      </Form>
      </Formik>
    </div>
  </section>
</main>
 
        </>
    );
}

export default Appoiment;