import React from 'react';
import { Container, Image ,Dropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { supportedLngs } from 'src/i18n';
import { useTranslation } from 'react-i18next';

type BasicLayoutPropTypes = {
  children: React.ReactNode;
};


  
const BasicLayout = (props: BasicLayoutPropTypes) => {

  const { i18n } = useTranslation();
  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  return (
    <>
      {/* Nav Bar */}
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 mx-auto ">
          <Link to="/">
          <Image
            src="/icons/logo.png"
            alt="bg image"
            fluid
            style={{ width: 110 }}
          />
           </Link>
        </span>
       

        <Link to="/login" className="me-4 text-reset">
              Login
        </Link>

        <Dropdown>
        <Dropdown.Toggle
          variant="outline"
          className="btn btn-outline-warning mb-1"
        >
          {i18n.language}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {supportedLngs.map((lang, idx) => (
            <Dropdown.Item key={idx} onClick={() => changeLanguage(lang)}>
              {lang}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
      
      </nav>

      {/* Bg Image */}
      <div className="bg-header"></div>

      {/* children */}
      <Container>{props.children}</Container>

      <Footer></Footer>
    </>
  );
};

export default BasicLayout;
