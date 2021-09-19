import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = (props) => {
     return (
          <>
               <div className="card text-center bg-white animate__animated animate__fadeInUp col-md-3 col-10 mx-auto">
                    <NavLink to={props.link}>
                         <div className="overflow">

                              <img
                                   src={props.imgsrc}
                                   className="card-img-top"
                                   alt={props.imgsrc}
                              />
                         </div>
                         <div className="card-body text-dark">
                              <h5 className="product-card-title">
                                   {props.title}
                              </h5>
                              {/* <p className="card-text ">
                              {props.text}
                         </p> */}
                         </div>
                    </NavLink>
               </div>
          </>
     );
};

export default Card;
