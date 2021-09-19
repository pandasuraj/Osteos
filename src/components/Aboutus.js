import React from 'react';
import aboutus from '../assets/images/aboutus1.jpg';
import motivation from '../assets/images/motivation.jpg';
import TeamCard from './TeamCard';
import ClientCard from '../components/ClientCard';

const Aboutus = () => {
     return (
          <>
               <div id="header2" className="bg-light py-5">
                    <div className="container py-5">
                         <div className="row h-110 align-items-center py-5">
                              <div className="col-lg-6">
                                   <h1 className="display-4">
                                        <strong>About Us</strong>
                                   </h1>
                                   <p className="lead font-italic text-muted mb-0">
                                   Osteos is an innovative and evolving startup 
                                   venture focusing on digital healthcare and 
                                   communities driving healthcare services. 
                                   Our vision is to build a healthcare community
                                   network by forming long term partnerships 
                                   with a wide range of healthcare providers 
                                   and provide digital services using our Artha
                                   E-Clinic platform. Our key objective is to 
                                   strive bridging the gaps between doctors and 
                                   patients through our evolving Artha E-Clinic 
                                   platform in the current age of digital world.
 

                                   </p>
                              </div>
                              <div className="col-lg-6 order-1 order-lg-2 header-img">
                                   <img
                                        src={aboutus}
                                        className="img-fluid animated"
                                        alt="home img"
                                   />
                              </div>
                         </div>
                    </div>
               </div>
               <div id="header2" className="bg-white py-5">
                    <div className="container py-5">
                         <div className="row align-items-center mb-5">
                              <div className="col-lg-6 ">
                                   <h1 className="display-4">
                                        <b>Motivation</b>
                                   </h1>
                                   <p className="lead font-italic text-muted mb-0">
                                   We enable and evolve digital healthcare platform 
                                   in bridging the gaps between doctors community and 
                                   patients.Become doctors partner in enabling and 
                                   enhancing their clinical OPD and online consultations
                                   via our secured Artha E-Clinic digital platform.
                                   We work closely with health care providers in
                                   understanding their pain points and finding optimal 
                                   solutions.Build elegant and exceptionally simple 
                                   digital healthcare platform in serving broader communities.
                                   </p>
                              </div>
                              <div className="col-lg-6 px-5 mx-auto order-1 order-lg-2">
                                   <img
                                        src={motivation}
                                        className="img-fluid animated"
                                        alt="home img"
                                   />
                              </div>
                         </div>
                         <div className="bg-white py-5">
                              <div className="container py-5">
                                   <div className="row mb-4">
                                        <div className="col-lg-5">
                                             <h1 className="display-4">
                                                  <b> Our Team </b>
                                             </h1>
                                        </div>
                                   </div>
                                   <div className="col-sm-4">
                                        <TeamCard />
                                   </div>
                              </div>
                              <ClientCard />
                         </div>
                    </div>
               </div>
          </>
     );
};

export default Aboutus;
