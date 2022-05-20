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

export interface RecipeAction {
  type: RecipeActionType;
  payload: '';
}

export enum RecipeActionType {
  SET_RECIPIES,
}
