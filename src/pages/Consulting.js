import React from 'react';
import web from '../assets/images/Consulting1.jpg';
import { NavLink } from 'react-router-dom';
import Footer from '../components/Footer';

const Consulting = () => {
     return (
          <>
               <section id="header" className="d-flex align-items-center">
                    <div className="container-fluid">
                         <div className="row">
                              <div className="col-10 mx-auto">
                                   <div className="row">
                                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                             <h1>
                                                  Make your Consultation Easy
                                                  with{' '}
                                                  <strong className="brand-name">
                                                       Osteos
                                                  </strong>
                                             </h1>
                                             <h2 className="my-3">
                                                  We are here to make your
                                                  consultation better.
                                             </h2>
                                             <div className="mt-3">
                                                  <NavLink
                                                       className="btn-get-started"
                                                       to="/login"
                                                       target="_blank">
                                                       Get Started
                                                  </NavLink>
                                             </div>
                                        </div>

                                        <div className="col-lg-6 order-1 order-lg-2 header-img">
                                             <img
                                                  src={web}
                                                  className="img-fluid animated"
                                                  alt="home img"
                                             />
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>
               <Footer />
          </>
     );
};

export default Consulting;
