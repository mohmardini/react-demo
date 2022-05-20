import React from 'react';
import {
  RecipeAction,
  RecipeActionType,
  recipeInitialState,
  RecipeState,
} from 'src/models/recipe.model';

interface ReactProviderPropTypes {
  children: React.ReactNode;
}

export const RecipeContext = React.createContext({});

const recipeReducer = (
  state: RecipeState,
  action: RecipeAction
): RecipeState => {
  switch (action.type) {
    case RecipeActionType.SET_RECIPIES: {
      return { ...state, recipeList: action.payload };
    }
  }
};

export const RecipeProvider = ({ children }: ReactProviderPropTypes) => {
  const [state, dispatch] = React.useReducer(recipeReducer, recipeInitialState);

  return (
    <RecipeContext.Provider value={{ state, dispatch }}>
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;
