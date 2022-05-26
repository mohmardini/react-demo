import React from 'react';
import { Container,Image } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

interface LandingProps {}

export const Landing = ({}: LandingProps) => {

  const { t } = useTranslation();
  return (
    <Container className="d-flex justify-content-between align-items-center p-5 ">
      <Container className="bg-white rounded">
        <h1 className="display-2"> {t('common:intro')}</h1>
        <Link to="/recipe" className="btn btn-warning w-100 mt-4">
         {t('common:get_started')}
        </Link>
      </Container>
      <Container className="d-flex flex-column justify-content-center align-items-center h-100">
        <Image src='images/croll.png' fluid style={{'width':'80%'}} ></Image>
      </Container>
    </Container>
  );
};
