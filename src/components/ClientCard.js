import React from 'react';
import C1 from '../assets/images/Apurvi.png';
import C2 from '../assets/images/asia.png';
import { NavLink } from 'react-router-dom';

const ClientCard = () => {
     return (
          <>
               <div className="Client">
                    <div className="my-5">
                         <h1 className="display-4">
                              <b> Our Clients </b>
                         </h1>
                    </div>
                    <div className="container-fluid mb-5">
                         <div className="row">
                              <div className="col-10 mx-auto">
                                   <div className="row">
                                        <div className="row gy-4">
                                             <div className="card text-center bg-white animate__animated animate__fadeInUp col-md-3 col-10 mx-auto">
                                                  <div className="overflow">
                                                       <NavLink
                                                            to={{
                                                                 pathname:
                                                                      'https://www.drmanjunathkodihally.com/',
                                                            }}
                                                            target="_blank">
                                                            <img
                                                                 src={C1}
                                                                 className="card-img-top"
                                                                 alt="client img"
                                                            />
                                                       </NavLink>
                                                  </div>
                                             </div>
                                             <div className="card text-center bg-white animate__animated animate__fadeInUp col-md-3 col-10 mx-auto">
                                                  <div className="overflow">
                                                       <NavLink
                                                            to={{
                                                                 pathname:
                                                                      'https://www.arthritisfoundationasia.com/',
                                                            }}
                                                            target="_blank">
                                                            <img
                                                                 src={C2}
                                                                 className="card-img-top"
                                                                 alt="client img"
                                                            />
                                                       </NavLink>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     );
};

export default ClientCard;
