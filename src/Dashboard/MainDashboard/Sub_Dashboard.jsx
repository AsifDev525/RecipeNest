import React from 'react';

import Navbar from '../components/Navbar/Navbar'
import Welcome from '../components/Welcome/Welcome'
import RecipeCard from '../components/RecipeCard/RecipeCard'
import AboutUs from '../components/Aboutus/Aboutus'
import ContactUS from '../components/Contactus/ContactUs'
import LiveChat from '../components/Contactus/LiveChat'
import Faq from '../components/FAQ/Faq'
import Term from '../components/Term/Term'
const SubDashboard = () => {
  return (
    <div>
            <Navbar/>
            <Welcome/> 
            <RecipeCard/> 
            <AboutUs/> 
            <ContactUS/> 
            <LiveChat/> 
            <Faq/>
            <Term/> 
    </div>
  );
};

export default SubDashboard;
