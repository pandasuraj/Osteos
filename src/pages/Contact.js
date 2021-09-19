import React from 'react';
import contact from '../assets/images/contact.jpg';
import Footer from '../components/Footer';

const Contact = () => {
     return (
          <>
               <div className="container">
                    <div className="row py-5 mt-4 align-items-center">
                         {/* For Demo Purpose */}
                         <div className="col-md-5 pr-lg-5 mb-5 mb-md-0">
                              <img
                                   src={contact}
                                   alt="contact"
                                   width="400"
                                   className="img-fluid mb-3 d-none d-md-block"
                              />
                              <div className="contact-div">
                                   <h2>Contact Us</h2>
                                   <p className="font-regular  text-muted mb-0">
                                        <b> Feel Free to Contact Us </b>
                                   </p>
                              </div>
                         </div>
                         {/*   Form */}
                         <div className="col-md-7 col-lg-6 ml-auto">
                              <form
                                   action="https://formsubmit.co/info@osteos.io"
                                   method="POST">
                                   <div className="row">
                                        {/* First Name */}
                                        <div className="input-group col-lg-12 mb-4">
                                             <span className="input-group-text bg-white px-4 border-md border-right-0">
                                                  <i className="fa fa-user text-muted" />
                                             </span>

                                             <input
                                                  id="Name"
                                                  type="text"
                                                  name="name"
                                                  placeholder="Enter Your Name"
                                                  className="form-control bg-white border-left-0 border-md"
                                             />
                                        </div>

                                        {/* Email Address */}
                                        <div className="input-group col-lg-12 mb-4">
                                             <span className="input-group-text bg-white px-4 border-md border-right-0">
                                                  <i className="fa fa-envelope text-muted" />
                                             </span>

                                             <input
                                                  id="email"
                                                  type="email"
                                                  name="email"
                                                  placeholder="Email Address"
                                                  className="form-control bg-white border-left-0 border-md"
                                             />
                                        </div>
                                        {/* Phone Number */}
                                        <div className="input-group col-lg-12 mb-4">
                                             <span className="input-group-text bg-white px-4 border-md border-right-0">
                                                  <i className="fa fa-phone-square text-muted" />
                                             </span>

                                             <input
                                                  id="phoneNumber"
                                                  type="Number"
                                                  name="phone"
                                                  placeholder="Phone Number"
                                                  className="form-control bg-white border-md border-left-0 pl-3"
                                             />
                                        </div>
                                        {/* Message */}
                                        <div className="input-group col-lg-12 mb-4">
                                             <span className="input-group-text bg-white px-4 border-md border-right-0">
                                                  <i
                                                       class="fa fa-commenting-o"
                                                       aria-hidden="true"></i>
                                             </span>
                                             <textarea
                                                  class="form-control"
                                                  id="exampleFormControlTextarea1"
                                                  placeholder="Enter Your Message Here"
                                                  rows="3"></textarea>
                                        </div>
                                        {/* Submit Button */}
                                        <div className="form-group col-lg-12 mx-auto mb-0">
                                             <button className="btn btn-primary btn-block py-2">
                                                  <span className="font-weight-bold">
                                                       Submit
                                                  </span>
                                             </button>
                                        </div>
                                   </div>
                              </form>
                         </div>
                    </div>
               </div>
               <Footer />
          </>
     );
};

export default Contact;
