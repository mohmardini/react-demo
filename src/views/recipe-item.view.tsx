import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { getRecipe } from 'src/api/recipe.api';
import { Recipe } from 'src/models/recipe.model';

const RecipeItem = () => {
  const { recipeId } = useParams();
  const [image, setImage] = useState({ image: '' });
  const [recipe, setRecipe] = useState<Recipe>({
    _id: recipeId,
    title: '',
    body: '',
  });

  useEffect(() => {
    fetch('https://foodish-api.herokuapp.com/api/')
      .then((res) => res.json())
      .then(setImage);

    getRecipe(recipeId).then(setRecipe);
  }, [recipeId]);

  return (
    <Card>
      <Card.Body>
        <Card.Img src={image.image}></Card.Img>
        <Card.Title>{recipe.title}</Card.Title>
      </Card.Body>
      <Card.Text>{recipe.body}</Card.Text>
      <Button>Edit</Button>
    </Card>
  );
};

export default RecipeItem;
