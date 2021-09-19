import React from 'react';
import Products from '../components/Products';
import Pdata from '../components/Pdata';
import Footer from '../components/Footer';

const HomeCare = () => {
     const d = Pdata.filter((e) => e.id === '4')[0];
     return (
          <>
               <div className="prodNService">
                    <div className="my-5">
                         <h1 className="text-center">
                              <b> Home Care Management System</b>
                         </h1>
                    </div>
                    <div className="container-fluid mb-5">
                         <div className="row">
                              <div className="col-10 mx-auto">
                                   <div className="row">
                                        <div className="row gy-4">
                                             <Products
                                                  key={d.id}
                                                  imgsrc={d.imgsrc}
                                                  title={d.title}
                                                  content={d.content}
                                             />
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

export default HomeCare;
