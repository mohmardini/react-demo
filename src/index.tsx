import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-i18next';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './i18n';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { store } from './store/AppStore';
import Login from './views/login';
import NotFound from './views/NotFound';
import RecipeAddEdit from './views/RecipeEditAdd';
import RecipeItem from './views/RecipeItem';
import RecipeList from './views/RecipeList';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route index element={<RecipeList />} />
        <Route path="login" element={<Login />} />
        <Route path="view/:recipeId" element={<RecipeItem />} />
        <Route path="add" element={<RecipeAddEdit />} />
        <Route path="edit/:recipeId" element={<RecipeAddEdit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
