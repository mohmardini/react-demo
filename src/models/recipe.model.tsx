export interface Recipe {
  _id?: string;
  title: string;
  body: string;
}

export const recipeInitialState = {
  recipeList: [] as Recipe[],
};

export type RecipeState = typeof recipeInitialState;

export type RecipeAction = {
  type: RecipeActionType;
  payload: Recipe | Recipe[];
};

export enum RecipeActionType {
  SET_RECIPIES,
}
