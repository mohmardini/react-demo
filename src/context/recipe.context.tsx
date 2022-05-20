import React from 'react';
import { recipeInitialState } from 'src/models/recipe.model';

enum RecipeActionType {
  ADD_RECIPIES,
  EDIT_RECIPE,
}
interface RecipeReducerPayload {
  type: RecipeActionType;
  payload: object;
}
export interface ReactProviderPropTypes {
  children: React.ReactNode;
}

const recipeReducer = ({ type, payload }: RecipeReducerPayload) => {
  switch (type) {
    case RecipeActionType.ADD_RECIPIES: {
    }
    case RecipeActionType.EDIT_RECIPE: {
    }
  }
  return {};
};
const [state, dispatch] = React.useReducer(recipeReducer, recipeInitialState);
export const RecipeContext = React.createContext({ state, dispatch });

function RecipeProvider({ children }: ReactProviderPropTypes) {
  return (
    <RecipeContext.Provider value={{ state, dispatch }}>
      {children}
    </RecipeContext.Provider>
  );
}

export default RecipeProvider;
