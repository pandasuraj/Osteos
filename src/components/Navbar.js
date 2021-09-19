import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Navbar = () => {
     return (
          <>
               <div className="container">
                    <div className="row">
                         <div className="col">
                              <nav className="navbar  navbar-expand-lg navbar-light">
                                   <NavLink
                                        className="navbar-brand page-scroll"
                                        to="/">
                                        <img
                                             src={logo}
                                             width="100"
                                             height="50"
                                             alt=""
                                        />
                                   </NavLink>
                                   <button
                                        className="navbar-toggler"
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#navbarNav"
                                        aria-controls="navbarNav"
                                        aria-expanded="false"
                                        aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon" />
                                   </button>
                                   <div
                                        className="collapse navbar-collapse"
                                        id="navbarNav">
                                        <ul className="navbar-nav ms-auto">
                                             <li className="nav-item active">
                                                  <NavLink
                                                       activeClassName="menu_active"
                                                       exact
                                                       className="nav-link"
                                                       aria-current="page"
                                                       to="/">
                                                       Home
                                                  </NavLink>
                                             </li>
                                             <li className="nav-item">
                                                  <NavLink
                                                       activeClassName="menu_active"
                                                       exact
                                                       className="nav-link"
                                                       aria-current="page"
                                                       to="/doctorspanel">
                                                       Doctors Panel
                                                  </NavLink>
                                             </li>
                                             <li className="nav-item">
                                                  <NavLink
                                                       activeClassName="menu_active"
                                                       exact
                                                       className="nav-link"
                                                       to="/products_services">
                                                       Products and Services
                                                  </NavLink>
                                             </li>
                                             <li className="nav-item">
                                                  <NavLink
                                                       activeClassName="menu_active"
                                                       exact
                                                       className="nav-link"
                                                       to="/contact">
                                                       Contact
                                                  </NavLink>
                                             </li>
                                             <li className="nav-item">
                                                  <NavLink
                                                       activeClassName="menu_active"
                                                       exact
                                                       className="nav-link"
                                                       to="/consulting">
                                                       Consulting Room
                                                  </NavLink>
                                             </li>
                                             <li className="nav-item">
                                                  <NavLink
                                                       activeClassName="menu_active"
                                                       exact
                                                       className="nav-link"
                                                       to="/download">
                                                       Download App
                                                  </NavLink>
                                             </li>
                                        </ul>
                                   </div>
                              </nav>
                         </div>
                    </div>
               </div>
          </>
     );
};

export default Navbar;
