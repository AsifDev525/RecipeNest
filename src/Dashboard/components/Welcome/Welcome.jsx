import React from 'react'
import "./Welcome.css"
const Welcome = () => {
  return (
    <div>
        <div class="banner-image">
            <img class="welcome-banner" src='../../../../public/banner.jpg' alt='banner.jpg'/>
        </div>
        <div class="banner-text">
            <h1 class="banner-title">🍽️ Welcome to RecipeNest!</h1>
            <p class="banner-para">
                Discover homemade recipes filled with flavor, love, and inspiration.
                Cook smart, eat better, and make every meal a moment to remember.
            </p>
        </div>
    </div>
  )
}

export default Welcome