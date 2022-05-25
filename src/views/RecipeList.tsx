import React, { useEffect, useState } from 'react';
import { Col, Dropdown, Row } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { deleteRecipe, getAllRecipes } from 'src/api/Recipe';
import { useAppDispatch, useAppSelector } from 'src/hooks/RecipeRedux';
import { supportedLngs } from 'src/i18n';
import { addRecipes, selectRecipes } from 'src/store/RecipeSlice';
import DisplayCard from '../components/DisplayCard';

const RecipeList = () => {
  const recipes = useAppSelector(selectRecipes);
  const dispatch = useAppDispatch();
  const [refresh, setRefresh] = useState(false);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    getAllRecipes().then((recipies) => dispatch(addRecipes(recipies)));
  }, [dispatch, refresh]);

  const navigateToAdd = () => {
    navigate('/add');
  };

  const navigateToEdit = (_id?: string) => {
    navigate('/edit/' + _id);
  };

  const deleteRecipeHandler = (_id?: string) => {
    deleteRecipe(_id);
    setRefresh(!refresh);
  };

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      <button
        onClick={navigateToAdd}
        className="btn btn-outline-warning mb-1 mt-1"
      >
        {t('common:createRecipe')}
      </button>

      <Dropdown>
        <Dropdown.Toggle
          variant="outline"
          className="btn btn-outline-warning mb-1"
        >
          {i18n.language}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {supportedLngs.map((lang, idx) => (
            <Dropdown.Item key={idx} onClick={() => changeLanguage(lang)}>
              {lang}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>

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
