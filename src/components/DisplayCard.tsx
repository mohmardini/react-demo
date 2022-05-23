import React from 'react';
import { Card } from 'react-bootstrap';
import { BsFillPencilFill, BsFillTrashFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { Recipe } from 'src/models/recipe.model';

type DisplayCardPropTypes = Recipe & {
  navigateToEdit: (_id: Recipe['id']) => void;
  deleteRecipeHandler: (_id: Recipe['id']) => void;
};

const DisplayCard = ({
  id,
  title,
  body,
  navigateToEdit,
  deleteRecipeHandler,
}: DisplayCardPropTypes) => {
  return (
    <>
      <Card className="mb-4">
        <Card.Header>
          <div className="card-title">
            <Link to={`/view/${id}`}>{title}</Link>
          </div>
          <div className="card-icons">
            <span onClick={() => navigateToEdit(`${id}`)} className="p-1">
              <BsFillPencilFill />
            </span>
            <span onClick={() => deleteRecipeHandler(`${id}`)} className="p-1">
              <BsFillTrashFill />
            </span>
          </div>
        </Card.Header>
        <Card.Text className="card-description">{body}</Card.Text>
      </Card>
    </>
  );
};

export default DisplayCard;
