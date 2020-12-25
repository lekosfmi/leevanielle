import React, { useState } from 'react';

export function Navbar({ defaultSidebar, onSidebar }) {

  return (
    <nav className="navbar-theme navbar navbar-expand">
      <span
        onClick={() => onSidebar(!defaultSidebar)}
        className="sidebar-toggle d-flex mr-2"
      >
        <i className="hamburger align-self-center"></i>
      </span>

      <div className="collapse navbar-collapse">
        <ul className="ml-auto navbar-nav">
          <li className="ml-lg-1 active dropdown nav-item">
            <a className="nav-icon dropdown-toggle position-relative nav-link" aria-expanded="false">
            </a>
            <div tabIndex="-1" role="menu" aria-hidden="true" className="dropdown-menu-lg py-0 dropdown-menu dropdown-menu-right">
               <div className="dropdown-menu-header position-relative">4 New Messages</div>
               <ul className="list-group">
                  <li className="list-group-item">
                     <div className="align-items-center no-gutters row">
                        <div className="col-2"><img className="avatar img-fluid rounded-circle" src="/static/media/avatar-5.bbafb5ce.jpg" alt="Michelle Bilodeau" /></div>
                        <div className="pl-2 col-10">
                           <div className="text-dark">Michelle Bilodeau</div>
                           <div className="text-muted small mt-1">Nam pretium turpis et arcu. Duis arcu tortor.</div>
                           <div className="text-muted small mt-1">5m ago</div>
                        </div>
                     </div>
                  </li>
                  <li className="list-group-item">
                     <div className="align-items-center no-gutters row">
                        <div className="col-2"><img className="avatar img-fluid rounded-circle" src="/static/media/avatar-3.b1b571fd.jpg" alt="Kathie Burton" /></div>
                        <div className="pl-2 col-10">
                           <div className="text-dark">Kathie Burton</div>
                           <div className="text-muted small mt-1">Pellentesque auctor neque nec urna.</div>
                           <div className="text-muted small mt-1">30m ago</div>
                        </div>
                     </div>
                  </li>
                  <li className="list-group-item">
                     <div className="align-items-center no-gutters row">
                        <div className="col-2"><img className="avatar img-fluid rounded-circle" src="/static/media/avatar-2.c9ab07da.jpg" alt="Alexander Groves"/></div>
                        <div className="pl-2 col-10">
                           <div className="text-dark">Alexander Groves</div>
                           <div className="text-muted small mt-1">Curabitur ligula sapien euismod vitae.</div>
                           <div className="text-muted small mt-1">2h ago</div>
                        </div>
                     </div>
                  </li>
                  <li className="list-group-item">
                     <div className="align-items-center no-gutters row">
                        <div className="col-2"><img className="avatar img-fluid rounded-circle" src="/static/media/avatar-4.3e16a355.jpg" alt="Daisy Seger" /></div>
                        <div className="pl-2 col-10">
                           <div className="text-dark">Daisy Seger</div>
                           <div className="text-muted small mt-1">Aenean tellus metus, bibendum sed, posuere ac, mattis non.</div>
                           <div className="text-muted small mt-1">5h ago</div>
                        </div>
                     </div>
                  </li>
               </ul>
               <h6 tabindex="-1" className="dropdown-menu-footer dropdown-header"><span className="text-muted">Show all messages</span></h6>
            </div>
         </li>
         <li className="ml-lg-1 dropdown nav-item">
            <a href="/" className="nav-icon dropdown-toggle position-relative nav-link" aria-expanded="false">
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bell" className="svg-inline--fa fa-bell fa-w-14 align-middle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path fill="currentColor" d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"></path>
               </svg>
               <span className="indicator"></span>
            </a>
            <div tabindex="-1" role="menu" aria-hidden="true" className="dropdown-menu-lg py-0 dropdown-menu dropdown-menu-right">
               <div className="dropdown-menu-header position-relative">4 New Notifications</div>
               <ul className="list-group">
                  <li className="list-group-item">
                     <div className="align-items-center no-gutters row">
                        <div className="col-2">
                           <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bell" className="svg-inline--fa fa-bell fa-w-14 text-danger" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                              <path fill="currentColor" d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"></path>
                           </svg>
                        </div>
                        <div className="col-10">
                           <div className="text-dark">Update completed</div>
                           <div className="text-muted small mt-1">Restart server 12 to complete the update.</div>
                           <div className="text-muted small mt-1">2h ago</div>
                        </div>
                     </div>
                  </li>
                  <li className="list-group-item">
                     <div className="align-items-center no-gutters row">
                        <div className="col-2">
                           <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="envelope-open" className="svg-inline--fa fa-envelope-open fa-w-16 text-warning" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                              <path fill="currentColor" d="M512 464c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V200.724a48 48 0 0 1 18.387-37.776c24.913-19.529 45.501-35.365 164.2-121.511C199.412 29.17 232.797-.347 256 .003c23.198-.354 56.596 29.172 73.413 41.433 118.687 86.137 139.303 101.995 164.2 121.512A48 48 0 0 1 512 200.724V464zm-65.666-196.605c-2.563-3.728-7.7-4.595-11.339-1.907-22.845 16.873-55.462 40.705-105.582 77.079-16.825 12.266-50.21 41.781-73.413 41.43-23.211.344-56.559-29.143-73.413-41.43-50.114-36.37-82.734-60.204-105.582-77.079-3.639-2.688-8.776-1.821-11.339 1.907l-9.072 13.196a7.998 7.998 0 0 0 1.839 10.967c22.887 16.899 55.454 40.69 105.303 76.868 20.274 14.781 56.524 47.813 92.264 47.573 35.724.242 71.961-32.771 92.263-47.573 49.85-36.179 82.418-59.97 105.303-76.868a7.998 7.998 0 0 0 1.839-10.967l-9.071-13.196z"></path>
                           </svg>
                        </div>
                        <div className="col-10">
                           <div className="text-dark">Lorem ipsum</div>
                           <div className="text-muted small mt-1">Aliquam ex eros, imperdiet vulputate hendrerit et.</div>
                           <div className="text-muted small mt-1">6h ago</div>
                        </div>
                     </div>
                  </li>
                  <li className="list-group-item">
                     <div className="align-items-center no-gutters row">
                        <div className="col-2">
                           <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="building" className="svg-inline--fa fa-building fa-w-14 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                              <path fill="currentColor" d="M436 480h-20V24c0-13.255-10.745-24-24-24H56C42.745 0 32 10.745 32 24v456H12c-6.627 0-12 5.373-12 12v20h448v-20c0-6.627-5.373-12-12-12zM128 76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76zm0 96c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40zm52 148h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12zm76 160h-64v-84c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v84zm64-172c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12v-40c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40zm0-96c0 6.627-5.373 12-12 12h-40c-6.627 0-12-5.373-12-12V76c0-6.627 5.373-12 12-12h40c6.627 0 12 5.373 12 12v40z"></path>
                           </svg>
                        </div>
                        <div className="col-10">
                           <div className="text-dark">Login from 192.186.1.1</div>
                           <div className="text-muted small mt-1"></div>
                           <div className="text-muted small mt-1">8h ago</div>
                        </div>
                     </div>
                  </li>
                  <li className="list-group-item">
                     <div className="align-items-center no-gutters row">
                        <div className="col-2">
                           <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bell-slash" className="svg-inline--fa fa-bell-slash fa-w-20 text-success" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                              <path fill="currentColor" d="M633.82 458.1l-90.62-70.05c.19-1.38.8-2.66.8-4.06.05-7.55-2.61-15.27-8.61-21.71-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84c-40.33 8.38-74.66 31.07-97.59 62.57L45.47 3.37C38.49-2.05 28.43-.8 23.01 6.18L3.37 31.45C-2.05 38.42-.8 48.47 6.18 53.9l588.35 454.73c6.98 5.43 17.03 4.17 22.46-2.81l19.64-25.27c5.42-6.97 4.17-17.02-2.81-22.45zM157.23 251.54c-8.61 67.96-36.41 93.33-52.62 110.75-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h241.92L157.23 251.54zM320 512c35.32 0 63.97-28.65 63.97-64H256.03c0 35.35 28.65 64 63.97 64z"></path>
                           </svg>
                        </div>
                        <div className="col-10">
                           <div className="text-dark">New connection</div>
                           <div className="text-muted small mt-1">Anna accepted your request.</div>
                           <div className="text-muted small mt-1">12h ago</div>
                        </div>
                     </div>
                  </li>
               </ul>
               <h6 tabindex="-1" className="dropdown-menu-footer dropdown-header"><span className="text-muted">Show all notifications</span></h6>
            </div>
         </li>
         <li className="ml-lg-1 dropdown nav-item">
            <a href="/" className="dropdown-toggle nav-link" aria-expanded="false">
               <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cog" className="svg-inline--fa fa-cog fa-w-16 align-middle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path fill="currentColor" d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"></path>
               </svg>
            </a>
            <div tabindex="-1" role="menu" aria-hidden="true" className="dropdown-menu dropdown-menu-right">
               <button type="button" tabindex="0" role="menuitem" className="dropdown-item">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user" className="svg-inline--fa fa-user fa-w-14 fa-fw mr-2 align-middle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                     <path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
                  </svg>
                  View Profile
               </button>
               <button type="button" tabindex="0" role="menuitem" className="dropdown-item">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="comments" className="svg-inline--fa fa-comments fa-w-18 fa-fw mr-2 align-middle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                     <path fill="currentColor" d="M416 192c0-88.4-93.1-160-208-160S0 103.6 0 192c0 34.3 14.1 65.9 38 92-13.4 30.2-35.5 54.2-35.8 54.5-2.2 2.3-2.8 5.7-1.5 8.7S4.8 352 8 352c36.6 0 66.9-12.3 88.7-25 32.2 15.7 70.3 25 111.3 25 114.9 0 208-71.6 208-160zm122 220c23.9-26 38-57.7 38-92 0-66.9-53.5-124.2-129.3-148.1.9 6.6 1.3 13.3 1.3 20.1 0 105.9-107.7 192-240 192-10.8 0-21.3-.8-31.7-1.9C207.8 439.6 281.8 480 368 480c41 0 79.1-9.2 111.3-25 21.8 12.7 52.1 25 88.7 25 3.2 0 6.1-1.9 7.3-4.8 1.3-2.9.7-6.3-1.5-8.7-.3-.3-22.4-24.2-35.8-54.5z"></path>
                  </svg>
                  Contacts
               </button>
               <button type="button" tabindex="0" role="menuitem" className="dropdown-item">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chart-pie" className="svg-inline--fa fa-chart-pie fa-w-17 fa-fw mr-2 align-middle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 544 512">
                     <path fill="currentColor" d="M527.79 288H290.5l158.03 158.03c6.04 6.04 15.98 6.53 22.19.68 38.7-36.46 65.32-85.61 73.13-140.86 1.34-9.46-6.51-17.85-16.06-17.85zm-15.83-64.8C503.72 103.74 408.26 8.28 288.8.04 279.68-.59 272 7.1 272 16.24V240h223.77c9.14 0 16.82-7.68 16.19-16.8zM224 288V50.71c0-9.55-8.39-17.4-17.84-16.06C86.99 51.49-4.1 155.6.14 280.37 4.5 408.51 114.83 513.59 243.03 511.98c50.4-.63 96.97-16.87 135.26-44.03 7.9-5.6 8.42-17.23 1.57-24.08L224 288z"></path>
                  </svg>
                  Analytics
               </button>
               <button type="button" tabindex="0" role="menuitem" className="dropdown-item">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="cogs" className="svg-inline--fa fa-cogs fa-w-20 fa-fw mr-2 align-middle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                     <path fill="currentColor" d="M512.1 191l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0L552 6.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zm-10.5-58.8c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.7-82.4 14.3-52.8 52.8zM386.3 286.1l33.7 16.8c10.1 5.8 14.5 18.1 10.5 29.1-8.9 24.2-26.4 46.4-42.6 65.8-7.4 8.9-20.2 11.1-30.3 5.3l-29.1-16.8c-16 13.7-34.6 24.6-54.9 31.7v33.6c0 11.6-8.3 21.6-19.7 23.6-24.6 4.2-50.4 4.4-75.9 0-11.5-2-20-11.9-20-23.6V418c-20.3-7.2-38.9-18-54.9-31.7L74 403c-10 5.8-22.9 3.6-30.3-5.3-16.2-19.4-33.3-41.6-42.2-65.7-4-10.9.4-23.2 10.5-29.1l33.3-16.8c-3.9-20.9-3.9-42.4 0-63.4L12 205.8c-10.1-5.8-14.6-18.1-10.5-29 8.9-24.2 26-46.4 42.2-65.8 7.4-8.9 20.2-11.1 30.3-5.3l29.1 16.8c16-13.7 34.6-24.6 54.9-31.7V57.1c0-11.5 8.2-21.5 19.6-23.5 24.6-4.2 50.5-4.4 76-.1 11.5 2 20 11.9 20 23.6v33.6c20.3 7.2 38.9 18 54.9 31.7l29.1-16.8c10-5.8 22.9-3.6 30.3 5.3 16.2 19.4 33.2 41.6 42.1 65.8 4 10.9.1 23.2-10 29.1l-33.7 16.8c3.9 21 3.9 42.5 0 63.5zm-117.6 21.1c59.2-77-28.7-164.9-105.7-105.7-59.2 77 28.7 164.9 105.7 105.7zm243.4 182.7l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0l8.2-14.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zM501.6 431c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.6-82.4 14.3-52.8 52.8z"></path>
                  </svg>
                  Settings
               </button>
               <div tabindex="-1" className="dropdown-divider"></div>
               <button type="button" tabindex="0" role="menuitem" class="dropdown-item">
                  <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-alt-circle-right" class="svg-inline--fa fa-arrow-alt-circle-right fa-w-16 fa-fw mr-2 align-middle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                     <path fill="currentColor" d="M256 8c137 0 248 111 248 248S393 504 256 504 8 393 8 256 119 8 256 8zM140 300h116v70.9c0 10.7 13 16.1 20.5 8.5l114.3-114.9c4.7-4.7 4.7-12.2 0-16.9l-114.3-115c-7.6-7.6-20.5-2.2-20.5 8.5V212H140c-6.6 0-12 5.4-12 12v64c0 6.6 5.4 12 12 12z"></path>
                  </svg>
                  Sign out
               </button>
            </div>
         </li>
      </ul>
   </div>
</nav>
  );
}
