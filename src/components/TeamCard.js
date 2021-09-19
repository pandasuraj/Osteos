import React from 'react';
import Dr1 from '../assets/images/Dr_mahantesh.jpg';

const TeamCard = () => {
     return (
          <>
               <div className="container-team">
                    <div className="team">
                         <div className="team-img overflow">
                              <img
                                   src={Dr1}
                                   className="card-img-top"
                                   alt="Team pic"
                              />
                         </div>
                         <div className="team-content">
                              <h5>Dr Mahantesh Magadum</h5>
                              <h4> Founder </h4>
                              <p></p>
                         </div>
                    </div>
               </div>

               
          </>
     );
};

export default TeamCard;
