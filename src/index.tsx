import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import 'react-i18next';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './i18n';
import './index.css';
import BasicLayout from './layout/BasicLayout';
import reportWebVitals from './reportWebVitals';
import store from './store/AppStore';
import { Landing } from './views/Landing';
import Login from './views/Login';
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
      <BasicLayout>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route index element={<Landing />} />
          <Route path="recipe">
            <Route index element={<RecipeList />} />
            <Route path="view/:recipeId" element={<RecipeItem />} />
            <Route path="add" element={<RecipeAddEdit />} />
            <Route path="edit/:recipeId" element={<RecipeAddEdit />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BasicLayout>
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
