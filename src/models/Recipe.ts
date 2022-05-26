export interface Recipe {
  id?: string;
  title: string;
  body: string;
}

export const recipeInitialState = {
  recipeList: [] as Recipe[],
};

export type RecipeState = typeof recipeInitialState;
