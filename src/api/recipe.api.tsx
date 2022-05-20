import { Recipe } from 'src/models/recipe.model';
const url = 'https://usman-recipes.herokuapp.com/api/recipes/';

export const getAllRecipes = async () => {
  return await fetch(url).then((res) => res.json());
};

export const getRecipe = async (_id: Recipe['_id']) => {
  return await fetch(url + _id).then((res) => res.json());
};

export const deleteRecipe = async (_id: Recipe['_id']) => {
  return await fetch(url + _id, {
    method: 'DELETE',
  }).then((res) => res.json());
};

export const addRecipe = async (recipe: Recipe) => {
  return await fetch(url, {
    method: 'POST',
    body: JSON.stringify(recipe),
  }).then((res) => res.json());
};

export const putRecipe = async (recipe: Recipe) => {
  return await fetch(url, {
    method: 'PUT',
    body: JSON.stringify(recipe),
  }).then((res) => res.json());
};
