import React from 'react'
import "./RecipeCard.css"
import { RiArrowRightSLine } from "react-icons/ri";
import SeriesData from "./SeriesData.json"


const RecipeCard = () => {
  return (
    <>
          <h1 class="section-title">💖 Most Loved Around the World</h1>
          <div class="series-container">
            {SeriesData.map((curElem,id)=>{
              return(
                <div class="series-card" key={id}>
                    <img class="series-image" src={curElem.image}/>
                    <h1 class="series-title">{curElem.title}</h1>
                    <h2 class="series-origin">{curElem.origin}</h2>
                    <p class="series-discription">{curElem.description}</p>
                    <button class ="more-details-btn"> More detail </button> 
                  </div>
              )
            })}
          </div>
    </>
  )
}

export default RecipeCard