import { Recipe } from 'src/models/recipe.model';
const url = 'https://usman-recipes.herokuapp.com/api/recipes';
const headers = { 'X-Api-Key': '2r1MsGLr9CVkmoWXP3W9cw==PRc4vXEXY0paXsms' };

export const getAllRecipes = async () => {
  return await fetch(url, { headers }).then((res) => res.json());
};

export const getRecipe = async (_id: Recipe['_id']) => {
  return await fetch(url + _id, { headers }).then((res) => res.json());
};

export const deleteRecipe = async (_id: Recipe['_id']) => {
  return await fetch(url + _id, {
    headers,
    method: 'DELETE',
  }).then((res) => res.json());
};

export const addRecipe = async (recipe: Recipe) => {
  return await fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(recipe),
  }).then((res) => res.json());
};

export const putRecipe = async (recipe: Recipe) => {
  return await fetch(url, {
    method: 'PUT',
    headers,
    body: JSON.stringify(recipe),
  }).then((res) => res.json());
};
