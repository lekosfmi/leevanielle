import React, { useState } from 'react';

export function Navbar({ defaultSidebar, onSidebar }) {

   return (
      <nav className="navbar-theme navbar navbar-expand">
         <span
            onClick={() => onSidebar(!defaultSidebar)}
            className="sidebar-toggle d-flex mr-2">
            <i className="hamburger align-self-center"></i>
         </span>
         
         <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="ml-auto navbar-nav">
               <li className="ml-lg-1 dropdown nav-item">
                  <a
                     href="https://github.com/lekosfmi"
                     className="nav-icon dropdown-toggle position-relative nav-link"
                     target="_blank"
                     aria-expanded="false">
                     Github
                  </a>
               </li>
               <li className="ml-lg-1 dropdown nav-item">
                  <a
                     href="https://gitlab.com/leevanielle"
                     className="dropdown-toggle nav-link"
                     target="_blank"
                     aria-expanded="false">
                     Gitlab
                  </a>
               </li>
               <li className="ml-lg-1 dropdown nav-item">
                  <a
                     href="https://www.linkedin.com/in/vanielle-lee-35662a87"
                     className="dropdown-toggle nav-link"
                     target="_blank"
                     aria-expanded="false">
                     Linkedin
                  </a>
               </li>
            </ul>
         </div>
      </nav>
   );
}
