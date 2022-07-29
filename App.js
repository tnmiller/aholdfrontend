import './App.css';
import Loginfunc from './components/login/login';
import React, { useState } from 'react';
import Dashboardfunc from './components/dashboard/dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import CreateFunc from './components/create/createnew'
import PastFunc from './components/past/pcampaigns';
import SpecificPast from './components/past/pcampaigns'
import DraftFunc from './components/drafts/drafts';
import ProfileFunc from './components/Profile/profile';
import NewAd from './components/create/createNewAd';
import NewDigital from './components/create/createNewDigital';
import NewMedia from './components/create/createNewMedia';
import NewPrinted from './components/create/createNewPrinted';
import Current from './components/currentCampaign/current'
import Specific from './components/specificCampaign/campaign';
import { loginRequest } from "./authConfig"
import callMsGraph from "./components/Profile/graph.js"

import { useIsAuthenticated, useMsal} from "@azure/msal-react";



function App() {
  const isAuthenticated = useIsAuthenticated();
 
  return (
    
    <BrowserRouter>

          <Routes>   
       
          {isAuthenticated ? <Route path="/" element={<Dashboardfunc />}></Route> : <Route path="/" element={<Loginfunc />}></Route>}

          <Route path="/" element={<Loginfunc />}></Route>
          <Route path="/create" element={<CreateFunc />}></Route>
          <Route path="/past" element={<PastFunc />}></Route>
          <Route path="/drafts" element={<DraftFunc />}></Route>
          <Route path="/profile" element={<ProfileFunc />}></Route>
          <Route path="/createNewAd" element={<NewAd />}></Route>
          <Route path="/createNewDigital" element={<NewDigital />}></Route>
          <Route path="/createNewMedia" element={<NewMedia />}></Route>
          <Route path="/currentCampaign"  element={<Current />}></Route>
          <Route path="/createNewPrinted" element={<NewPrinted />}></Route>
          <Route path="/specific/:id" element={<Specific/>}></Route> 
          <Route path="/past/:id" element={<SpecificPast/>}></Route> 
          </Routes>
                      
    
    
 
    </BrowserRouter>
    
  );
}



export default App;
