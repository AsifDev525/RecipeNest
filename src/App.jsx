import React from 'react'
import UserLogin from './Loginform/UserLogin'
import Signup from './signupForm/Signup'
import Navbar from './Dashboard/components/Navbar/Navbar'
import RecipeCard from './Dashboard/components/RecipeCard/RecipeCard'
import AboutUs from './Dashboard/components/Aboutus/Aboutus'
import ContactUS from './Dashboard/components/Contactus/ContactUS'
import Welcome from './Dashboard/components/Welcome/Welcome'
import Faq from './Dashboard/components/FAQ/Faq'
import Term from './Dashboard/components/Term/Term'
import LiveChat from './Dashboard/components/Contactus/LiveChat'

const App = () => {
  return (
    <div>
       {/* <UserLogin/> */}
       {/* <Signup/> */}
       
       <Navbar/>
      <Welcome/>
       <RecipeCard/>
       <AboutUs/>  
       <ContactUS/>
       <LiveChat/>
       <Faq/>
       <Term/>
    </div>
  )
}

export default App