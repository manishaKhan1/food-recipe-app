import React from 'react';
import './RecipeTile.css';

export  function RecipeTile({ recipe })
{
    return(
        <div className="recipeTile">
        <img className="recipeTile_img" src={recipe["recipe"]["image"]}></img>

        <p className="recipeTile_name">{recipe["recipe"]["label"]}

        <p className="complete_recipe" onClick={() =>{
            window.open(recipe["recipe"]["url"])
        }
        }>See Complete Recipe</p>
        </p>
        </div>
    );
}