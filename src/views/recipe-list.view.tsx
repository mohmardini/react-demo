import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllRecipes } from 'src/api/recipe.api';
import { useRecipeContext } from 'src/hooks/recipe-context.hook';
import { RecipeActionType } from 'src/models/recipe.model';

const RecipeList = () => {
  const { state, dispatch } = useRecipeContext();

  useEffect(() => {
    const recipies = getAllRecipes();
    recipies.then((recipies) =>
      dispatch({ type: RecipeActionType.SET_RECIPIES, payload: recipies })
    );
  }, [dispatch]);
  return (
    <div>
      <Link to={'/edit/555665'}></Link>
    </div>
  );
};

export default RecipeList;
