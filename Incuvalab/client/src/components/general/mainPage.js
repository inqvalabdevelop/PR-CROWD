import React from "react";
import NavPage from './navbar/navPage';
import Sidebar from './navbar/sidebar'
import NavbarHead from "./navbar/navbar";

const MainPage = () => {
  return (
    <React.Fragment>
      {/* sidebar section */}
      {localStorage.getItem('role') != null && localStorage.getItem('role') == "Administrador" ?
      <div>
        <section>
        <NavbarHead/>
      </section>
      <section>
        <div className='row'>
          <div className='col bg-dark h-screen p-3  pt-8 relative duration-300'>
              <Sidebar/>
          </div>
          <div className='col col-9'>
              <NavPage/>
          </div>
        </div>
      </section>
      </div>
      :
      <div>
        
      </div>
      }
    </React.Fragment>
  );
};

export default MainPage;