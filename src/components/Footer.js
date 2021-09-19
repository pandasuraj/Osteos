import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/footerlogo.png';

const Footer = () => {
     return (
          <>
               <footer className="footer">
                    <div className="row">
                         <div className="col-sm-4">
                              <div className="footer-main">
                                   <div className="row">
                                        <div className="col-sm">
                                             <p className="about">
                                                  <span>
                                                       Osteos (India) Private
                                                       Limited © 2021
                                                  </span>
                                                  Please do Visit Our Social
                                                  Handles
                                             </p>
                                        </div>
                                   </div>
                                   <div className="row">
                                        <div className="col-sm">
                                             <div className="icons">
                                                  <NavLink
                                                       className="btn-get-started"
                                                       to={{
                                                            pathname:
                                                                 'https://www.facebook.com/osteosdigital',
                                                       }}
                                                       target="_blank">
                                                       <i className="fa fa-facebook" />
                                                  </NavLink>
                                                  {/* <NavLink
                      className="btn-get-started"
                      to={{
                        pathname:
                          "https://boardroom.arthaeclinic.com/boardroom",
                      }}
                      target="_blank"
                    >
                      <i className="fa fa-whatsapp" />
                    </NavLink> */}
                                                  <NavLink
                                                       className="btn-get-started"
                                                       to={{
                                                            pathname:
                                                                 'https://instagram.com/osteosdigitalhealthcare?igshid=198dh0t7sgdrh',
                                                       }}
                                                       target="_blank">
                                                       <i className="fa fa-instagram" />
                                                  </NavLink>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div className="col-sm-4">
                              <div className="footer-main">
                                   <div className="row">
                                        <div className="col">
                                             <div className="locationMarker">
                                                  <div className="row">
                                                       <div className="col">
                                                            <div className="locContent">
                                                                 <i className="fa fa-map-marker" />
                                                                 <p className="address">
                                                                      LIG
                                                                      117,Mahantesh
                                                                      Nagar,
                                                                      <br />
                                                                      Belgaum-590016,
                                                                      <br />
                                                                      Karnataka
                                                                      State,India
                                                                 </p>
                                                            </div>
                                                       </div>
                                                  </div>
                                                  <div className="row">
                                                       <div className="col">
                                                            <div className="locContent">
                                                                 <i className="fa fa-phone" />
                                                                 <p className="contact">
                                                                      (+91) 831
                                                                      245 3938
                                                                 </p>
                                                            </div>
                                                       </div>
                                                  </div>
                                                  <div className="row">
                                                       <div className="col">
                                                            <div className="locContent">
                                                                 <i className="fa fa-envelope " />
                                                                 <p className="contact">
                                                                      info@osteos.io
                                                                 </p>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div className="col-sm-4">
                              <div className="footer-main">
                                   <div className="row">
                                        <div className="col">
                                             <NavLink to="/">
                                                  <img
                                                       src={logo}
                                                       className="footer-logo"
                                                       width="200"
                                                       height="90"
                                                       alt=""
                                                  />
                                             </NavLink>
                                        </div>
                                   </div>
                                   {/* <div className="row">
                                        <div className="col">
                                             <p className="name">
                                                  Osteos (India) Private Limited
                                                  © 2021
                                             </p>
                                        </div>
                                   </div> */}
                              </div>
                         </div>
                    </div>
               </footer>
          </>
     );
};

export default Footer;
