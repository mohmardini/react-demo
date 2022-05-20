import React from 'react';

interface RecipeReducerPayload {
  type: string;
  payload: object;
}
export declare interface ReactProviderPropTypes {
  children: React.ReactNode;
}
const initialState = {};

const recipeReducer = ({ type, payload }: RecipeReducerPayload) => {
  switch (type) {
    case '':
  }
  return {};
};
const [state, dispatch] = React.useReducer(recipeReducer, initialState);
export const RecipeContext = React.createContext({ state, dispatch });

function RecipeProvider({ children }: ReactProviderPropTypes) {
  return (
    <RecipeContext.Provider value={{ state, dispatch }}>
      {children}
    </RecipeContext.Provider>
  );
}

export default RecipeProvider;
