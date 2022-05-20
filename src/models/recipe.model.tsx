export interface Recipe {
  _id: string;
  title: string;
  body: string;
}
export interface RecipeState {
  recipeList: Array<Recipe>;
  recipeItem: Recipe;
}

export const recipeInitialState: RecipeState = {
  recipeList: [],
  recipeItem: {
    _id: '',
    title: '',
    body: '',
  },
};
