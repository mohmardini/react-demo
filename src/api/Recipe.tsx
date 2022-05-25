import { Recipe } from 'src/models/Recipe';
const url = 'https://jsonplaceholder.typicode.com/posts/';
const headers = { 'X-Api-Key': '2r1MsGLr9CVkmoWXP3W9cw==PRc4vXEXY0paXsms' };

export const getAllRecipes = async () => {
  return await fetch(url, { headers }).then((res) => res.json());
};

export const getRecipe = async (id: Recipe['id']) => {
  return await fetch(url + id, { headers }).then((res) => res.json());
};

export const deleteRecipe = async (id: Recipe['id']) => {
  return await fetch(url + id, {
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
  const modifiedRecipe = { title: recipe.title, body: recipe.body };
  return await fetch(url + recipe.id, {
    method: 'PUT',
    headers,
    body: JSON.stringify(modifiedRecipe),
  }).then((res) => res.json());
};
