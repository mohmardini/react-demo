import React, { useEffect } from 'react';
import { Card, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getAllRecipes } from 'src/api/recipe.api';
import { useRecipeContext } from 'src/hooks/recipe-context.hook';
import { RecipeActionType } from 'src/models/recipe.model';

const RecipeList = () => {
  const { state, dispatch } = useRecipeContext();

  useEffect(() => {
    const recipies = getAllRecipes();
    recipies.then((recipies) =>
      dispatch({ type: RecipeActionType.SET_RECIPIES, payload: recipies })
    );
  }, [dispatch]);

  return (
    <Stack direction="horizontal" gap={3}>
      {state.recipeList.map((recipe) => {
        return (
          <Link to={`/view/${recipe._id}`}>
            <Card>
              <Card.Header>
                <Card.Title>{recipe.title}</Card.Title>
              </Card.Header>
              <Card.Text>{recipe.body}</Card.Text>
            </Card>
          </Link>
        );
      })}
    </Stack>
  );
};

export default RecipeList;
