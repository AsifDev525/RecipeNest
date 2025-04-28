import React from 'react'
import "./RecipeCard.css"
import SeriesData from "./SeriesDara.json"
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
                  </div>
              )
            })}
          </div>
    </>
  )
}

export default RecipeCard