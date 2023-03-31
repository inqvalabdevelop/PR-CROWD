import React from "react";
import { Routes, Route } from "react-router-dom";
import { FundingProvider } from "../../../context/fundingContext";
import { UserProvider } from "../../../context/userContext";
import { ControlAprobe } from "../../../pages/Control/controlAprove";
import { ControlCommand } from "../../../pages/Control/controlCommand";
import { ControlComplete } from "../../../pages/Control/controlComplete";
import { ControlRecycled } from "../../../pages/Control/controlRecycled";
import { ControlUsers } from "../../../pages/Control/controlUsers";


const NavPage = () => {
  return (
    <React.Fragment>
      <section>
        <Routes>
            <Route path="/control-page" element={<FundingProvider><ControlCommand/></FundingProvider>}/>
            <Route path="/control-page-aprove" element={<FundingProvider><ControlAprobe/></FundingProvider> }/>
            <Route path="/control-page-complete" element={<FundingProvider><ControlComplete/></FundingProvider>}/>
            <Route path="/control-page-recycle" element={<FundingProvider><ControlRecycled/></FundingProvider> }/>
            <Route path="/control-page-user" element={<UserProvider><ControlUsers/></UserProvider> }/>
            <Route path="/createProyect" ></Route>
        </Routes>
      </section>
    </React.Fragment>
  );
};

export default NavPage;