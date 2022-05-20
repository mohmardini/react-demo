// import React from 'react';

// interface RecipeReducerPayload {
//   type: string;
//   payload: object;
// }
// export interface ReactProviderPropTypes {
//   children: React.ReactNode;
// }
// const initialState = {
//   recipeList: [],
//   recipeItem: {},
// };

// const recipeReducer = ({ type, payload }: RecipeReducerPayload) => {
//   switch (type) {
//     case 'Add_item': {
//       ...state,
//       recipeList: [...recipeList, payload.item]
//     }
//   }
//   return {};
// };
// const [state, dispatch] = React.useReducer(recipeReducer, initialState);
// export const RecipeContext = React.createContext({ state, dispatch });

// function RecipeProvider({ children }: ReactProviderPropTypes) {
//   return (
//     <RecipeContext.Provider value={{ state, dispatch }}>
//       {children}
//     </RecipeContext.Provider>
//   );
// }

// export default RecipeProvider;
