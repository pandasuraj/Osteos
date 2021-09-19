import React from 'react';
import Card from '../components/Card';
import Sdata from '../components/Sdata';
import Footer from '../components/Footer';

const Products_Services = () => {
     return (
          <>
               <div className="prodNService">
                    <div className="my-5">
                         <h1 className="text-center">
                              <b> Our Products and Services </b>
                         </h1>
                    </div>
                    <div className="container-fluid mb-5">
                         <div className="row">
                              <div className="col-10 mx-auto">
                                   <div className="row">
                                        <div className="row gy-4">
                                             {Sdata.map((val, ind) => {
                                                  return (
                                                       <Card
                                                            id ={val.id}
                                                            key={ind}
                                                            imgsrc={val.imgsrc}
                                                            title={val.title}
                                                            link={val.link}
                                                       />
                                                  );
                                             })}
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

export default Products_Services;
