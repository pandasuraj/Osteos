import React from 'react';

const Products = (props) => {
     return (
          <>
               <div className="container">
                    <div className="row">
                         <div className="column">
                              <div className="row">
                                   <div className="col-sm-6">
                                        <div className="row p-img">
                                             <img
                                                  src={props.imgsrc}
                                                  className="animated"
                                                  alt=""
                                             />
                                        </div>
                                   </div>
                                   <div className="col-sm-6">
                                        <div className="row">
                                             <p className="p-text">
                                                  {props.content}
                                             </p>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </>
     );
};

export default Products;
