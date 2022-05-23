import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { getRecipe } from 'src/api/recipe.api';
import { Recipe } from 'src/models/recipe.model';

const RecipeItem = () => {
  const { recipeId } = useParams();
  const [image, setImage] = useState({ image: '' });
  const [recipe, setRecipe] = useState<Recipe>({
    id: recipeId,
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
    <Container className="p-5">
      <Card>
        <Card.Header>
          <Card.Title>{recipe.title}</Card.Title>
        </Card.Header>
        <Card.Body>
          <Card.Img className="" src={image.image}></Card.Img>
          <Card.Text className="p-5">{recipe.body}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default RecipeItem;
