import { Recipe } from 'src/models/recipe.model';

export const getAllRecipes = async () => {
  return await fetch('https://usman-recipes.herokuapp.com/api/recipes').then(
    (res) => res.json()
  );
};

export const getRecipe = async (_id: Recipe['_id']) => {
  return await fetch(
    'https://usman-recipes.herokuapp.com/api/recipes/' + _id
  ).then((res) => res.json());
};

export const deleteRecipe = async (_id: Recipe['_id']) => {
  return await fetch('https://usman-recipes.herokuapp.com/api/recipes/' + _id, {
    method: 'DELETE',
  }).then((res) => res.json());
};

export const addRecipe = async (recipe: Recipe) => {
  return await fetch('https://usman-recipes.herokuapp.com/api/recipes/').then(
    (res) => res.json()
  );
};

export const putRecipe = async (recipe: Recipe) => {
  return await fetch('https://usman-recipes.herokuapp.com/api/recipes/').then(
    (res) => res.json()
  );
};
