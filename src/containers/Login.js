import React from 'react';

function Login(props) {
    return (
        <>
            <div className="section-title">
                <h2>Login</h2>
            </div>

            <div className="container">
                <div className="col-lg-8 mt-5 mt-lg-0">
                    <form action method="post" role="form" className="php-email-form">
                        <div className="row">
                            <div className="col-md-6 form-group">
                                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                            </div>
                            <div className="col-md-6 form-group mt-3 mt-md-0">
                                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                            </div>
                        </div>
                        <div className="form-group mt-3">
                            <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                        </div>
                        <div className="form-group mt-3">
                            <textarea className="form-control" name="message" rows={5} placeholder="Message" required defaultValue={""} />
                        </div>
                        <div className="text-center"><button type="submit">Send Message</button></div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Login;