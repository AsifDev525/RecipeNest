
import React, { useState } from 'react'
import "./Navbar.css"
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
  
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate


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
  return (
    <div>
      <nav class="dashboard-navbar">
        <h1 class="dashboard-logo">RecipeNest</h1>
        
        <div class="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? '✖' : '☰'}
        </div>

        <ul className={`navbar-menu ${menuOpen ? 'show' : ''}`}>
          <select className="custom-select" onChange={handleChange}>
              <option value="select_recipe">Select Recipe</option>
              <option value="breakfast">Breakfast</option>
              <option value="lunch">Lunch</option>
              <option value="dinner">Dinner</option>
              <option value="snacks">Snacks</option>
              <option value="desserts">Desserts</option>
              <option value="fastfood">Fast Food</option>
          </select>

            <select className="custom-select" onChange={handleChange}>
              <option value="cuisines">Cuisines</option>
              <option value="italian">Italian</option>
              <option value="chinese">Chinese</option>
              <option value="pakistani">Pakistani</option>
              <option value="mexican">Mexican</option>
              <option value="turkish">Turkish</option>
              <option value="arabic">Arabic</option>
              <option value="american">American</option>
              <option value="portugal">Portugal</option>
            </select>

            <select className="custom-select" onChange={handleChange}>
              <option value="holiday">Holidays</option>
              <option value="eid">Eid</option>
              <option value="ramadan">Ramadan</option>
              <option value="christmas">Christmas</option>
              <option value="thanksgiving">Thanksgiving</option>
              <option value="diwali">Diwali</option>
              <option value="hanukkah">Hanukkah</option>
              <option value="new_year">New Year</option>
              <option value="easter">Easter</option>
              <option value="independence_day">Independence Day</option>
            </select>

         <li className="navbar-item"><a href="/aboutus">About us</a></li>
        <li class="navbar-logout"><a href="/getout">Logout</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar