import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RecipeProvider from './context/recipe.context';
import './index.css';
import reportWebVitals from './reportWebVitals';
import NotFound from './views/not-found.view';
import RecipeAddEdit from './views/recipe-add-edit.view';
import RecipeItem from './views/recipe-item.view';
import RecipeList from './views/recipe-list.view';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  
    <RecipeProvider>
      <BrowserRouter>
        {/* <Nav>
          <Nav.Link as={Link} to="/">
            RecipeList
          </Nav.Link>
        </Nav> */}
        <Routes>
          <Route index element={<RecipeList />} />
          <Route path="view/:recipeId" element={<RecipeItem />} />
          <Route path="add" element={<RecipeAddEdit />} />
          <Route path="edit/:recipeId" element={<RecipeAddEdit />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </RecipeProvider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
