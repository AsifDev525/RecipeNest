import React from 'react'
import "./Welcome.css"
const Welcome = () => {
  return (
    <>
          <div className="banner-image">
           <img className="welcome-banner" src="/banner.jpg" alt="banner" />
             <div class="bubble bubble1"></div>
  <div class="bubble bubble2"></div>
  <div class="bubble bubble3"></div>
  <div class="bubble bubble4"></div>
  <div class="bubble bubble5"></div>
          </div>
        <div className="banner-text">
            <h1 class="banner-title">🍽️ Welcome to RecipeNest!</h1>
            <p class="banner-para">
                Discover homemade recipes filled with flavor, love, and inspiration.
                Cook smart, eat better, and make every meal a moment to remember.
            </p>
        </div>
    </>
  )
}

export default Welcome