import React from 'react';
import * as yup from 'yup';
import { Form, Formik, useFormik } from 'formik';
import { NavLink, useHistory } from 'react-router-dom';

function Bookappoment(props) {

    const history = useHistory();

    let schema = yup.object().shape({
        department: yup.string().required("Please select your department."),
        date: yup.date().required("Please enter your appointment date."),
        phone: yup.number().required("Please enter your phone number."),
        name: yup.string().required("Please enter your name."),
        email: yup.string().email("Please enter your vaild email id.").required("Please enter your email id."),
        message: yup.string().required("Please enter your message.")
    })
    const formik = useFormik({
        initialValues: {
            department: '',
            phone: '',
            name: '',
            email: '',
            date: '',
            message: ''
        },
        validationSchema: schema,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            history.push("/lista");
        },
    }
    )
    let { errors, handleBlur, handleSubmit, handleChange, touched, values } = formik;
    return (
        <>
            <main id="main">
                <section className='my-4'>
                    <div className='container'>
                        <div className='row text-center'>
                            <div className='col-6'>
                                <NavLink exact to={"/appoiment"} className="appointment-btn scrollto">Book appointment</NavLink>
                            </div>
                            <div className='col-6'>
                                <NavLink exact to={"/lista"} className="appointment-btn scrollto">List appointment</NavLink>
                            </div>
                        </div>
                    </div>
                </section>
                <section id="appointment" className="appointment">
                    <div className="container">
                        <div className="section-title">
                            <h2>Make an Appointment</h2>
                            <p>Aenean enim orci, suscipit vitae sodales ac, semper in ex. Nunc aliquam eget nibh eu euismod. Donec dapibus
                                blandit quam volutpat sollicitudin. Fusce tincidunt sit amet ex in volutpat. Donec lacinia finibus tortor.
                                Curabitur luctus eleifend odio. Phasellus placerat mi et suscipit pulvinar.</p>
                        </div>
                        <Formik values={formik}>
                            <Form onSubmit={handleSubmit} className="php-email-form">
                                <div className="row">
                                    <div className="col-md-4 form-group">
                                        <input type="text" name="name"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className="form-control" id="name" placeholder="Your Name" />
                                        {errors.name && touched.name ? <p className='text-center'>{errors.name}</p> : ""}
                                    </div>
                                    <div className="col-md-4 form-group mt-3 mt-md-0">
                                        <input type="email"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className="form-control" name="email" id="email" placeholder="Your Email" />

                                        {errors.email && touched.email ? <p className='text-center'>{errors.email}</p> : ""}
                                    </div>
                                    <div className="col-md-4 form-group mt-3 mt-md-0">
                                        <input type="tel"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            className="form-control" name="phone" id="phone" placeholder="Your Phone" maxLength={10} />
                                        {errors.phone && touched.phone ? <p className='text-center'>{errors.phone}</p> : ""}
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-4 form-group mt-3">
                                        <input type="date" name="date" className="form-control datepicker" id="date" placeholder="Appointment Date"
                                            onChange={handleChange}
                                            onBlur={handleBlur} />
                                        <div className="validate" />
                                        {errors.date && touched.date ? <p className='text-center'>{errors.date}</p> : ""}
                                    </div>
                                    <div className="col-md-4 form-group mt-3">
                                        <select name="department" id="department" className="form-select"
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        >
                                            <option value="">Select Department</option>
                                            <option value="Department 1">Department 1</option>
                                            <option value="Department 2">Department 2</option>
                                            <option value="Department 3">Department 3</option>
                                        </select>
                                        <div className="validate" />
                                        {errors.department && touched.department ? <p className='text-center'>{errors.department}</p> : ""}
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <textarea className="form-control" onChange={handleChange}
                                        onBlur={handleBlur} name="message" rows={5} placeholder="Message" defaultValue={""} />
                                    {errors.message && touched.message ? <p className='text-center'>{errors.message}</p> : ""}
                                    <div className="validate" />
                                </div>
                                <div className="mb-3">
                                    <div className="loading">Loading</div>
                                    <div className="error-message" />
                                    <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
                                </div>
                                <div className="text-center">
                                    <button type='submit'>Make an Appointment</button>
                                </div>
                            </Form>
                        </Formik>
                    </div>
                </section>
            </main>
        </>
    );
}

export default Bookappoment;