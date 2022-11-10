
import './App.css';
import Axios from "axios";
import { useState} from "react";
import { RecipeTile } from './RecipeTile.js';

import logo from './icons8-recipe-64.png'; 
console.log(logo);



function App() {

  const [query, setquery] = useState("");

  const [recipes, setrecipes] = useState([]);

  const [healthLabel, sethealthLabels] = useState("alcohol-free");

  
 const YOUR_APP_ID="0da3ddf9";
const YOUR_APP_KEY="8b85c399a0e0bfc931526565dc827709";

  var url = `https://api.edamam.com/search?q=${query}& app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&&health=${healthLabel}`;

async function getRecipes()
{
  var result= await Axios.get(url);
  setrecipes(result.data.hits);
  console.log(result.data);
}

const onSubmit =(e) => {
  e.preventDefault();
  getRecipes();
}


  return (
    <div className="app">
      <h1 className="app_header" onClick={getRecipes}>Tasty Food Recipes🍕</h1>

      <form className="app_searchForm" onSubmit={onSubmit}>

      
        <input type="text" className="app_input"  placeholder="search for recipes 🔍" value={query} onChange={(e) => setquery(e.target.value)}>

        </input>

        <input className="app_submit" type="submit" value="Search"></input>

      <select className="app_healthLables">

        <option selected>Select Food Type🍽️ </option>

        <option onClick={() => sethealthLabels("Alcohol-Free")}>Alcohol-Free</option>

        <option onClick={() => sethealthLabels("vegan")}>Vegan</option>

       <option onClick={() => sethealthLabels("Dairy-Free")}>Dairy-Free</option>

        <option onClick={() => sethealthLabels("Egg-Free")}>Egg-Free</option>

        <option onClick={() => sethealthLabels("Fish-Free")}>Fish-Free</option>

        <option onClick={() => sethealthLabels("Gluten-Free")}>Gluten-Free</option>

        <option onClick={() => sethealthLabels("Immuno-Supportive")}>Immuno-Supportive</option>

        <option onClick={() => sethealthLabels("Keto-Friendly")}>Keto-Friendly</option>

        <option onClick={() => sethealthLabels("Kidney-Friendly")}>Kidney-Friendly</option>

        <option onClick={() => sethealthLabels("Low Sugar")}>Low Sugar</option>

        <option onClick={() => sethealthLabels("Mustard-Free")}>Mustard-Free</option>

        <option onClick={() => sethealthLabels("No oil added")}>No oil added</option>

        <option onClick={() => sethealthLabels("Peanut-Free")}>Peanut-Free</option>

        <option onClick={() => sethealthLabels("Pork-Free")}>Pork-Free</option>

        <option onClick={() => sethealthLabels("Red-Meat-Free")}>Red-Meat-Free</option>

        <option onClick={() => sethealthLabels("Sugar-Conscious")}>Sugar-Conscious</option>

        <option onClick={() => sethealthLabels("Vegetarian")}>Vegetarian</option>

        <option onClick={() => sethealthLabels("Wheat-Free")}>Wheat-Free</option>
        
      </select>


      </form>

      <div className="app_recipes">
        {recipes.map((recipe) => {
          return <RecipeTile recipe={recipe}/>;
        })}
      </div>

        <div className="image">
        <img src={logo} alt="Logo" width="200px" height="200px" />
        </div>
        
        <div className="title">
        <p>Welcome Foodies, Your All In One Destination For Food Recipes</p>
        </div>
        
       
       
    </div>
  );
}

export default App;
