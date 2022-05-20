import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

const RecipeItem = () => {
  const { state } = useRecipeContext();
  const [image, setImage] = useState('');

  useEffect(() => {
    fetch('https://foodish-api.herokuapp.com/api/')
      .then((image) => image.json())
      .then(setImage);
  }, []);
  
  return (
    <Card>
      <Card.Body>
        <Card.Img></Card.Img>
        <Card.Title>{recipe.title}</Card.Title>
      </Card.Body>
      <Card.Text>{recipe.body}</Card.Text>
    </Card>
  );
};

export default RecipeItem;
