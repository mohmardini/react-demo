import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { getRecipe } from 'src/api/recipe.api';
import RecipeProvider from 'src/context/recipe.context';

const RecipeAddEdit = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    if (recipeId) {
      const recipePromise = getRecipe(recipeId);
      recipePromise.then(setRecipe);
    }
  }, [recipeId]);

  const submit = () => {};

  return (
    <RecipeProvider>
      <Form onSubmit={() => submit()}>
        {Object.keys(recipe).map((key) => (
          <Form.Group className="mb-3" controlId={`formBasic${key}`}>
            <Form.Label>{key}</Form.Label>
            <Form.Control type="text" placeholder={`Enter ${key}`} />
          </Form.Group>
        ))}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </RecipeProvider>
  );
};

export default RecipeAddEdit;
