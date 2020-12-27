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

          <div className="container">
            <Header />
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;