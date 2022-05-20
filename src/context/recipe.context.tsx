import React from 'react';
import { recipeInitialState } from 'src/models/recipe.model';

export enum RecipeActionType {
  FILL_RECIPIES,
}
interface RecipeReducerPayload {
  type: RecipeActionType;
  payload: object;
}
interface ReactProviderPropTypes {
  children: React.ReactNode;
}

const recipeReducer = ({ type, payload }: RecipeReducerPayload) => {
  switch (type) {
    case RecipeActionType.FILL_RECIPIES: {
    }
  }
  return {};
};
export const RecipeContext = React.createContext({});

export const RecipeProvider = ({ children }: ReactProviderPropTypes) => {
  const [state, dispatch] = React.useReducer(recipeReducer, recipeInitialState);

  return (
    <RecipeContext.Provider value={{ state, dispatch }}>
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;
