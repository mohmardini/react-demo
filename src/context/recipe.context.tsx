import React, { Dispatch } from 'react';
import {
  Recipe,
  RecipeAction,
  RecipeActionType,
  recipeInitialState,
  RecipeState,
} from 'src/models/recipe.model';

interface ReactProviderPropTypes {
  children: React.ReactNode;
}

type RecipeContextType =
  | {
      state: RecipeState;
      dispatch: Dispatch<RecipeAction>;
    }
  | undefined;

const recipeReducer = (state: RecipeState, action: RecipeAction) => {
  switch (action.type) {
    case RecipeActionType.SET_RECIPIES: {
      return { ...state, recipeList: action.payload as Recipe[] };
    }
  }
};
export const RecipeContext = React.createContext<RecipeContextType>(undefined);

export const RecipeProvider = ({ children }: ReactProviderPropTypes) => {
  const [state, dispatch] = React.useReducer(recipeReducer, recipeInitialState);

  return (
    <RecipeContext.Provider value={{ state, dispatch }}>
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;
