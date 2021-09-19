import React from 'react';

const DrCard = (props) => {
     return (
          <>
               <div className="card text-center bg-white animate__animated animate__fadeInUp col-md-3 col-10 mx-auto">
                    <div className="overflow">
                         <img
                              src={props.imgsrc}
                              className="card-img-top"
                              alt={props.imgsrc}
                         />
                    </div>
                    <div className="card-body text-dark">
                         <h5 className="card-title">{props.title}</h5>
                         <h6 className="card-text text-secondary dr-details">
                              {props.subtitle}
                         </h6>
                         <h5 className="card-text text-secondary">
                              {props.content}
                         </h5>
                    </div>
               </div>
          </>
     );
};

export default DrCard;
