import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { deleteRecipe, getAllRecipes } from 'src/api/Recipe';
import { useAppDispatch, useAppSelector } from 'src/hooks/RecipeRedux';
import { addRecipes, selectRecipes } from 'src/store/RecipeSlice';
import DisplayCard from '../components/DisplayCard';


const RecipeList = () => {
  const recipes = useAppSelector(selectRecipes);
  const dispatch = useAppDispatch();
  const [refresh, setRefresh] = useState(false);
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    getAllRecipes().then((recipies) => dispatch(addRecipes(recipies)));
  }, [dispatch, refresh]);

  const navigateToAdd = () => {
    navigate('/recipe/add');
  };

  const navigateToEdit = (_id?: string) => {
    navigate('/recipe/edit/' + _id);
  };

  const deleteRecipeHandler = (_id?: string) => {
    deleteRecipe(_id);
    setRefresh(!refresh);
  };


  return (
    <>
      <button
        onClick={navigateToAdd}
        className="btn btn-outline-warning mb-1 mt-1"
      >
        {t('common:createRecipe')}
      </button>


      <Row xs={1} md={4}>
        {recipes.map((recipe) => {
          return (
            <Col key={recipe.id}>
              <DisplayCard
                id={recipe.id}
                title={recipe.title}
                body={recipe.body}
                navigateToEdit={navigateToEdit}
                deleteRecipeHandler={deleteRecipeHandler}
              />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default RecipeList;
