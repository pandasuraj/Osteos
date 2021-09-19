import React from 'react';
// import h4 from '../assets/images/h4.jpg';
import h5 from '../assets/images/h5.jpg';
import h6 from '../assets/images/h6.jpg';
 import h10 from '../assets/images/h10.jpg';
 

const Carousel = () => {
     return (
          <>
               <div
                    id="carouselExampleDark"
                    className="carousel carousel-dark slide"
                    data-bs-ride="carousel">
                    <div className="carousel-indicators">
                         <button
                              type="button"
                              data-bs-target="#carouselExampleDark"
                              data-bs-slide-to={0}
                              className="active"
                              aria-current="true"
                              aria-label="Slide 1"
                         />
                         <button
                              type="button"
                              data-bs-target="#carouselExampleDark"
                              data-bs-slide-to={1}
                              aria-label="Slide 2"
                         />
                         <button
                              type="button"
                              data-bs-target="#carouselExampleDark"
                              data-bs-slide-to={2}
                              aria-label="Slide 3"
                         />
                    </div>
                    <div className="carousel-inner">
                         <div
                              className="carousel-item active"
                              data-bs-interval={2000}>
                              <img src={h6} className="home_img" alt="..." />
                              <div className="carousel-caption d-sm-block">
                                   <h3>WELCOME TO OSTEOS
                                        <br/> WE PROVIDE HEALTH SERVICES
                                   </h3>
                                   
                              </div>
                         </div>
                         <div className="carousel-item" data-bs-interval={2000}>
                              <img src={h5} className="home_img" alt="..." />
                              <div className="carousel-caption d-sm-block">
                                   <h3>
                                        PLATFORM FOR WELLBEING
                                        <br/> OF MANKIND AND HEALTHCARE
                                   </h3>
                                   
                              </div>
                         </div>
                         <div className="carousel-item">
                              <img src={h10} className="home_img" alt="..." />
                              <div className="carousel-caption d-sm-block">
                                   <h3>ALLOW US TO MAKE <br/>YOUR MEDICATION SIMPLE</h3>
                                   
                              </div>
                         </div>
                    </div>
                    <button
                         className="carousel-control-prev"
                         type="button"
                         data-bs-target="#carouselExampleDark"
                         data-bs-slide="prev">
                         <span
                              className="carousel-control-prev-icon"
                              aria-hidden="true"
                         />
                         <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                         className="carousel-control-next"
                         type="button"
                         data-bs-target="#carouselExampleDark"
                         data-bs-slide="next">
                         <span
                              className="carousel-control-next-icon"
                              aria-hidden="true"
                         />
                         <span className="visually-hidden">Next</span>
                    </button>
               </div>
          </>
     );
};

export default Carousel;
