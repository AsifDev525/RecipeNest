
import React, { useState } from 'react'
import "./Navbar.css"
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
  
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate()


  const handleChange = (e) =>{
    const selectedURL = e.target.value;
    if(
          selectedURL !== "select_recipe" &&
          selectedURL !== "cuisines" &&
          selectedURL !== "holiday"
    ){
      navigate(`/${selectedURL}`);
      setMenuOpen(false);
    }
  }
  const toggleMenu = () =>{
    setMenuOpen(!menuOpen);
  };

const goDashboard = (e) => {
  e.preventDefault();
  navigate("/dashboard");
};
  return (
    <div>
      <nav class="dashboard-navbar">
      <h1 className="dashboard-logo" onClick={goDashboard}>
        RecipeNest
      </h1>
        <div class="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? '✖' : '☰'}
        </div>

        <ul className={`navbar-menu ${menuOpen ? 'show' : ''}`}>
          <select className="custom-select" onChange={handleChange}>
              <option value="dashboard">Select Recipe</option>
              <option value="dashboard">Breakfast</option>
              <option value="dashboard
              ">Lunch</option>
              <option value="dashboard
              ">Dinner</option>
              <option value="dashboard
              ">Snacks</option>
              <option value="dashboard
              ">Desserts</option>
              <option value="dashboard
              ">Fast Food</option>
          </select>

            <select className="custom-select" onChange={handleChange}>
              <option value="dashboard
              ">Cuisines</option>
              <option value="dashboard
              ">Italian</option>
              <option value="dashboard
              ">Chinese</option>
              <option value="dashboard
              ">Pakistani</option>
              <option value="dashboard
              ">Mexican</option>
              <option value="dashboard
              ">Turkish</option>
              <option value="dashboard
              ">Arabic</option>
              <option value="dashboard
              ">American</option>
              <option value="dashboard
              ">Portugal</option>
            </select>

            <select className="custom-select" onChange={handleChange}>
              <option value="dashboard
              ">Holidays</option>
              <option value="dashboard
              ">Eid</option>
              <option value="dashboard
              ">Ramadan</option>
              <option value="dashboard
              ">Christmas</option>
              <option value="dashboard
              ">Thanksgiving</option>
              <option value="dashboard
              ">Diwali</option>
              <option value="dashboard
              ">Hanukkah</option>
              <option value="dashboard
              ">New Year</option>
              <option value="dashboard
              ">Easter</option>
              <option value="dashboard
              ">Independence Day</option>
            </select>

         <li className="navbar-item"><a href="/aboutus">About us</a></li>
        <li class="navbar-logout"><a href="/getout">Logout</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar