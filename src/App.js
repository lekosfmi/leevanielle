import React, { useState } from 'react';
import './App.scss';
import { Sidebar } from './components/sidebar/sidebar.component';
import { Header } from './components/header/header.component';
import { Navbar } from './components/navbar/navbar.component';

const IS_SIDEBAR_HIDDEN = true;
function App() {
  const [isSidebar, setSidebar] = useState(IS_SIDEBAR_HIDDEN);

  return (
    <div className="wrapper">
      <Sidebar isHidden={isSidebar} />

      <div className="main">
        <Navbar
          defaultSidebar={isSidebar}
          onSidebar={isSidebar => setSidebar(isSidebar)}
        />
        <div className="content">

          <div className="container-fluid">
            <Header />

            <div className="row">
              <div className="d-flex">
                <div className="card">
                  <div className="card-header">
                    <h1>Profile 1</h1>
                  </div>
                  <div className="card-body">
                    <h1>Profile Body</h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="d-flex">
                <div className="card">
                  <div className="card-header">
                    <h1>Profile 2</h1>
                  </div>
                  <div className="card-body">
                    <h1>Profile Body</h1>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="d-flex">
                <div className="card">
                  <div className="card-header">
                    <h1>Profile 3</h1>
                  </div>
                  <div className="card-body">
                    <h1>Profile Body</h1>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}

export default App;