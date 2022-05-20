export interface Recipe {
  _id?: string;
  title: string;
  body: string;
}
export interface RecipeState {
  recipeList: Array<Recipe>;
}

export const recipeInitialState: RecipeState = {
  recipeList: [],
};
