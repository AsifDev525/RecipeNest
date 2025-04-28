
import React from 'react'
import "./Navbar.css"
import Welcome from '../Welcome/Welcome'
const Navbar = () => {
  return (
    <div>
      <nav class="dashboard-navbar">
        <h1 class="dashboard-logo">RecipeNest</h1>
        <ul class="navbar-menu">
          <li class="navbar-item">Recipes</li>
          <li class="navbar-item">Cusines</li>
          <li class="navbar-item">Holidays</li>
          <li class="navbar-item">About us</li>
        </ul>
        <div class="navbar-logout">Logout</div>
      </nav>
      <div class="search-container">
        <input class="search-input" type="text" placeholder='Search Recipes by ingredient...' />
      </div>
      <Welcome/>
    </div>
  )
}

export default Navbar