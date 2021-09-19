import React from 'react';
import Footer from '../components/Footer';
import F1 from '../assets/images/F1.jpg';
import F2 from '../assets/images/F2.jpg';

const Download = () => {
     return (
          <>
               <div className="flyer">
                    <div className="my-5">
                         <h1 className="text-center">
                              <b>Online Consultation Scheduler Application</b>
                         </h1>
                    </div>
                    <div className="container sub-text">
                         <div className="row align-items-center">
                              <div className=" column">
                                   <p className="lead font-italic text-muted mb-0">
                                        Users can download the Osteos Online
                                        Consultation Scheduler Application
                                        either by Scanning the QR Code given
                                        below or by searching the OsteosConnect
                                        Scheduler Application in Google
                                        Playstore.
                                   </p>
                              </div>
                         </div>
                         <div className="flex-container">
                              <div className="row">
                                   <div className=" col-10 mx-auto">
                                        <div className="row flyer ">
                                             <img
                                                  src={F1}
                                                  className="animated"
                                                  alt=""
                                             />
                                        </div>
                                   </div>
                              </div>
                              <div className="flex-container">
                                   <div className="row">
                                        <div className="col-10 mx-auto">
                                             <div className="row flyer">
                                                  <img
                                                       src={F2}
                                                       className="animated"
                                                       alt=""
                                                  />
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               <Footer />
          </>
     );
};

export default Download;
