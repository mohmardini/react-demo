import React, { useEffect, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { addRecipe, getRecipe, putRecipe } from 'src/api/recipe.api';
import RecipeProvider from 'src/context/recipe.context';
import { Recipe } from 'src/models/recipe.model';

const RecipeAddEdit = () => {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState<Recipe>({
    title: '',
    body: '',
  });
  const [mode, setMode] = useState('ADD');

  useEffect(() => {
    if (recipeId) {
      const recipePromise = getRecipe(recipeId);
      recipePromise.then(setRecipe);
      setMode('EDIT');
    } else {
      setMode('ADD');
    }
  }, [recipeId]);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (mode === 'ADD') addRecipe({ ...recipe });
    else putRecipe(recipe);
  };

  return (
    <RecipeProvider>
      <Form onSubmit={(e) => submit(e)}>
        {Object.keys(recipe).map((key) => (
          <Form.Group className="mb-3" controlId={`formBasic${key}`} key={key}>
            <Form.Label>{key.toUpperCase()}</Form.Label>
            <Form.Control
              type="text"
              placeholder={`Enter ${key}`}
              onChange={(e) => setRecipe({ ...recipe, [key]: e.target.value })}
              value={recipe[key]}
            />
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
