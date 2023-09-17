import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Services from './pages/services/Services';
import Pricing from './pages/pricing/Pricing';
import Contact from './pages/contact/Contact';
import SignIn from './pages/signin/SignIn';
import SignUp from './pages/signup/SignUp';
import DashBoard from './pages/DashBoard/DashBoard';
import Cameras from './pages/Cameras/Cameras';
import SmartVision from './pages/SmartVision/SmartVision';
import Support from './pages/Support/Support';
import Detections from './pages/Detections/Detections';
import Account from './pages/Account/Account';
import Settings from './pages/Settings/Settings';
import { getToken } from './managers/authManager';
import AdminPanel from './pages/AdminPanel/AdminPanel';

function App() {
  // Check if there is a user token
  const user = getToken();

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignIn />} />

          {/* Deprecated / currently not in use routes due to lack of time */}
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/contact' element={<Contact />} />

          {/* Authentication routes */}
          <Route path='/signin' element={<SignIn />} />
          <Route path='/signup' element={<SignUp />} />

          {/* Check if there is a user token before rendering these routes */}
          {user && <Route path='/dashboard' exact element={<DashBoard />} />}
          {user && <Route path='/cameras' exact element={<Cameras />} />}
          {user && <Route path='/smartVision' exact element={<SmartVision />} />}
          {user && <Route path='/detections' exact element={<Detections />} />}
          {user && <Route path='/support' exact element={<Support />} />}
          {user && <Route path='/account' exact element={<Account />} />}
          {user && <Route path='/settings' exact element={<Settings />} />}
          {user && <Route path='/admin' exact element={<AdminPanel />} />}
          
          {/* Redirect to signin if there is no user token */}
          <Route path='/dashboard' exact element={<Navigate replace to="/signin" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
