import React from 'react';
import { Link } from 'react-router-dom';
import { getAllRecipes } from 'src/api/recipe.api';
import { RecipeActionType } from 'src/context/recipe.context';

const RecipeList = () => {
  useEffect(() => {
    const recipies = getAllRecipes()
    recipies.then(recipies => dipatch({type: RecipeActionType.SET_RECIPIES}))
  },[])
  return (
    <div>
      <Link to={'/edit/555665'}>RecipeList</Link>
    </div>
  );
};

export default RecipeList;
