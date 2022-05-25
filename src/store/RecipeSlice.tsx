import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Recipe, recipeInitialState as initialState } from 'src/models/Recipe';
import { RootState } from './AppStore';

export const recipeSlice = createSlice({
  name: 'recipe',
  initialState,
  reducers: {
    addRecipes: (state, action: PayloadAction<Recipe[]>) => ({
      ...state,
      recipeList: action.payload,
    }),
  },
});

export const { addRecipes } = recipeSlice.actions;

export const selectRecipes = (state: RootState) => state.recipe.recipeList;
export const selectRecipe = (state: RootState, index: number) =>
  state.recipe.recipeList[index];

export default recipeSlice.reducer;
