import React from 'react'
import UserLogin from './Loginform/UserLogin'
import Signup from './signupForm/Signup'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SubDashboard from './Dashboard/MainDashboard/Sub_Dashboard'
import AboutUs from './Dashboard/components/Aboutus/Aboutus'
import GetOut from './Dashboard/components/GetOut/GetOut'

const App = () => {
  return (
    <div>
      <BrowserRouter>
       <Routes>
         <Route path="/" element={    <UserLogin/> } />
         <Route path="/login" element={    <UserLogin/> } />
         <Route path='/signup' element={ <Signup/> } />
         <Route path='/dashboard' element={ <SubDashboard/> } />
         <Route path='/aboutus' element={ <AboutUs/> } />
         <Route path='/getout' element={ <GetOut/> } />
       </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App