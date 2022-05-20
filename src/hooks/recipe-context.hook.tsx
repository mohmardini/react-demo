import { useContext } from 'react';
import { RecipeContext } from 'src/context/recipe.context';

export const useRecipeContext = () => {
  const recipeContext = useContext(RecipeContext);

  if (!recipeContext)
    throw new Error('Recipe context can only be used in RecipeProvider');

  return recipeContext;
};
