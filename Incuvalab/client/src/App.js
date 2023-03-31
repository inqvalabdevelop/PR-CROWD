import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import NavbarHead from './components/general/navbar/navbar';

import { HomePage } from './pages/Home/homePage';
import { Login } from './pages/User/login';
import { UserProvider } from './context/userContext';
import { Register } from './pages/User/register';
import { ControlAprobe } from "./pages/Control/controlAprove";
import { ControlCommand } from "./pages/Control/controlCommand";
import { ControlComplete } from "./pages/Control/controlComplete";
import { ControlRecycled } from "./pages/Control/controlRecycled";
import { ControlUsers } from "./pages/Control/controlUsers";
import { FundingProvider } from "./context/fundingContext";
import { FundingPage } from './pages/Funding/funding';
import { Catalogue } from './pages/Catalogue/catalogue';
import { EmailVerification } from './pages/User/emailVerification';
import { CatalogueCategory } from './pages/Catalogue/catalogueCategory';
import { CatalogueName } from './pages/Catalogue/catalogueName';
import { NotFoundPage } from './pages/NotFoundPage';
import { Questions } from './pages/Information/frequentlyQuestions';
import { Settings } from './pages/User/settings';
import { ControlFunding } from './pages/Funding/fundingControl';
import { FundingForm } from './pages/Funding/formFunding';
import { FormChangePassword } from './pages/User/formChangePassword';
import { FormModfiedUser } from './pages/User/formModificationUser';
import { FormModfiedAccount } from './pages/User/formModificationAccount';
import { AddAdminForm } from './pages/User/formCreateAdmin';
import { UserProfile } from './pages/User/userProfile';
import { CodeVerication } from './pages/User/numberConfirmation';
import { PrivateRoute, PrivateRouteAdmin } from './components/general/privateRoute';
import ButtonLogout from './components/general/logout';

function App() {
  return (
    <Router>
      <NavbarHead />
      <Routes>
        <Route path="/" element={<FundingProvider><HomePage /></FundingProvider>} />
        <Route path="*" element={<NotFoundPage/>}/>

        <Route path="/formCodeConfirmation" element={<UserProvider><CodeVerication/></UserProvider>} />
        <Route path="/login" element={<UserProvider><Login /></UserProvider>} />
        <Route path="/register" element={<UserProvider><Register /></UserProvider>} />
        <Route path="/forgetPassword" element={<UserProvider><EmailVerification /></UserProvider>} />
        <Route path="/changePassword" element={<UserProvider><FormChangePassword/></UserProvider>} />
        <Route path='/funding/:id' element={<FundingProvider> <FundingPage /> </FundingProvider>} />
        <Route path="/questions" element={<Questions/>} />

        <Route path="/logout" element={<ButtonLogout/>} />
       
        <Route path='/catalogue' element={<FundingProvider> <Catalogue /> </FundingProvider>} />
        <Route path="/catalogue/category" element={<FundingProvider> <CatalogueCategory/> </FundingProvider>} />
        <Route path="/catalogue/name" element={<FundingProvider> <CatalogueName/> </FundingProvider>} />


        <Route exact path='/userProfile' element={<PrivateRoute/>}>
          <Route path="/userProfile" element={<UserProvider><UserProfile/></UserProvider>} />
        </Route>
        <Route exact path='/settings' element={<PrivateRoute/>}>
          <Route path="/settings" element={<UserProvider><Settings/></UserProvider>} />
        </Route>
        <Route exact path='/Settings/ModifiedProfile' element={<PrivateRoute/>}>
          <Route path="/Settings/ModifiedProfile" element={<UserProvider><FormModfiedUser/></UserProvider> }/>
        </Route>
        <Route exact path='/Settings/ConfigureAccount' element={<PrivateRoute/>}>
          <Route path="/Settings/ConfigureAccount" element={<UserProvider><FormModfiedAccount/></UserProvider>} />
        </Route>
        
       
        <Route exact path='/controlPage' element={<PrivateRouteAdmin/>}>
          <Route path="/controlPage" element={<FundingProvider><ControlCommand/></FundingProvider>} />
        </Route>
        <Route exact path='/controlPageAprove' element={<PrivateRouteAdmin/>}>
          <Route path="/controlPageAprove" element={<FundingProvider><ControlAprobe/></FundingProvider>} />
        </Route>
        <Route exact path='/controlPageComplete' element={<PrivateRouteAdmin/>}>
          <Route path="/controlPageComplete" element={<FundingProvider><ControlComplete/></FundingProvider>} />
        </Route>
        <Route exact path='/controlPageRecycle' element={<PrivateRouteAdmin/>}>
          <Route path="/controlPageRecycle" element={<FundingProvider><ControlRecycled/></FundingProvider>} />
        </Route>
        <Route exact  path='/controlPageUser' element={<PrivateRouteAdmin/>}>
          <Route path="/controlPageUser" element={<UserProvider><ControlUsers/></UserProvider>} />
        </Route>
        <Route exact path='/controlFunding/:id' element={<PrivateRouteAdmin/>}>
          <Route path="/controlFunding/:id" element={<FundingProvider><ControlFunding/></FundingProvider>} />
        </Route>
        <Route exact path='/createAdmin' element={<PrivateRouteAdmin/>}>
          <Route path="/createAdmin" element={<UserProvider><AddAdminForm/></UserProvider>} />
        </Route>
        <Route exact path='/createFunding/:id' element={<PrivateRouteAdmin/>}>
          <Route path="/createFunding/:id" element={<FundingProvider> <FundingForm /> </FundingProvider>} />
        </Route>
        <Route exact path='/createFunding' element={<PrivateRouteAdmin/>}>
          <Route path="/createFunding" element={<FundingProvider> <FundingForm /> </FundingProvider>} />
        </Route>
        
      </Routes>
    </Router>
  );
}

export default App;
