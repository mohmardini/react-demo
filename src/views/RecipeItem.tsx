import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { getRecipe } from 'src/api/Recipe';
import { Recipe } from 'src/models/Recipe';

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
          <div className='row'>
            <div  className="col-md-2"> <Card.Img src={image.image} ></Card.Img></div>
            <div  className="col-md-4"> <Card.Text >{recipe.body}</Card.Text> <div>Calories: 266. Fat: 10.1g. Sodium: 396mg.</div></div>
         
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default RecipeItem;
