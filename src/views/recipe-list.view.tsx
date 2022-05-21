import React, { useEffect, useState } from 'react';
import { Button, Card, Stack } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { deleteRecipe, getAllRecipes } from 'src/api/recipe.api';
import { useRecipeContext } from 'src/hooks/recipe-context.hook';
import { RecipeActionType } from 'src/models/recipe.model';

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

  return (
    <Stack direction="horizontal" gap={3}>
      <Button onClick={navigateToAdd}>Add</Button>
      {state.recipeList.map((recipe) => {
        return (
          <Card>
            <Link to={`/view/${recipe._id}`}>
              <Card.Header>
                <Card.Title>{recipe.title}</Card.Title>
              </Card.Header>
            </Link>
            <Card.Text>{recipe.body}</Card.Text>
            <Button
              variant="secondary"
              onClick={() => navigateToEdit(recipe._id)}
            >
              Edit
            </Button>
            <Button
              variant="danger"
              onClick={() => deleteRecipeHandler(recipe._id)}
            >
              Delete
            </Button>
          </Card>
        );
      })}
    </Stack>
  );
};

export default RecipeList;
