import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { deleteRecipe, getAllRecipes } from 'src/api/recipe.api';
import { useRecipeContext } from 'src/hooks/recipe-context.hook';
import BasicLayout from 'src/layout/BasicLayout';
import { RecipeActionType } from 'src/models/recipe.model';
import DisplayCard from '../components/DisplayCard';

const RecipeList = () => {
  const { state, dispatch } = useRecipeContext();
  const [refresh, setRefresh] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const recipies = getAllRecipes();
    recipies.then((recipies) =>
      dispatch({ type: RecipeActionType.SET_RECIPIES, payload: recipies })
    );
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

  // Just for testing
  state.recipeList.push(
    {
      id: '1',
      title: 'test',
      body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi nam placeat explicabo quibusdam provident. Nisi nulla accusantium amet libero dolorum laborum',
    },
    {
      id: '2',
      title: 'test',
      body: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi nam placeat explicabo quibusdam provident. Nisi nulla accusantium amet libero dolorum laborum',
    }
  );

  return (
    <>
      <BasicLayout>
        <button
          onClick={navigateToAdd}
          className="btn btn-outline-warning mb-5 mt-5"
        >
          Create Reciepe
        </button>

        <Row xs={1} md={4}>
          {state.recipeList.map((recipe) => {
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
      </BasicLayout>
    </>
  );
};

export default RecipeList;
