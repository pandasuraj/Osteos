import React from 'react';
import DrCard from '../components/Dr Card';
import Drdata from '../components/Drdata';
import Footer from '../components/Footer';

const DoctorsPanel = () => {
     return (
          <>
               <div className="drcolor">
                    <div className="my-5">
                         <h1 className="text-center">
                              <b> Our Doctors Pannel </b>
                         </h1>
                    </div>
                    <div className="container-fluid mb-5">
                         <div className="row">
                              <div className="col-10 mx-auto">
                                   <div className="row">
                                        <div className="row gy-4">
                                             {Drdata.map((val, ind) => {
                                                  return (
                                                       <DrCard
                                                            key={ind}
                                                            imgsrc={val.imgsrc}
                                                            title={val.title}
                                                            subtitle={
                                                                 val.subtitle
                                                            }
                                                            content={
                                                                 val.content
                                                            }
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

export default DoctorsPanel;
