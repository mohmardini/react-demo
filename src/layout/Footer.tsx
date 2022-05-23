import React from 'react';
import {
  AiFillFacebook,
  AiFillGoogleSquare,
  AiFillInstagram,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer className="footer text-center">
        <section className="d-flex  justify-content-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <Link to="/" className="me-4 text-reset">
              <AiFillFacebook size={30}></AiFillFacebook>
            </Link>
            <Link to="/" className="me-4 text-reset">
              <AiFillInstagram size={30}></AiFillInstagram>
            </Link>
            <Link to="/" className="me-4 text-reset">
              <AiFillGoogleSquare size={30}></AiFillGoogleSquare>
            </Link>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="justify-content-center row mt-3">
              <div className="col-md-2">
                <h6 className="text-uppercase mb-4">Products</h6>
                <p>
                  <Link to="/" className="text-reset">
                    Test
                  </Link>
                </p>
                <p>
                  <Link to="/" className="text-reset">
                    Test
                  </Link>
                </p>
                <p>
                  <Link to="/" className="text-reset">
                    Test
                  </Link>
                </p>
                <p>
                  <Link to="/" className="text-reset">
                    Test
                  </Link>
                </p>
              </div>
              <div className="col-md-5">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <Link to="/" className="text-reset">
                    Test
                  </Link>
                </p>
                <p>
                  <Link to="/" className="text-reset">
                    Test
                  </Link>
                </p>
                <p>
                  <Link to="/" className="text-reset">
                    Test
                  </Link>
                </p>
                <p>
                  <Link to="/" className="text-reset">
                    Test
                  </Link>
                </p>
              </div>
              <div className="col-md-3">
                <h6 className="text-uppercase fw-bold mb-4">Contact us</h6>
                <p>
                  <Link to="/" className="text-reset">
                    info@foody
                  </Link>
                </p>
                <p>
                  <Link to="/" className="text-reset">
                    +76 362 7362
                  </Link>
                </p>
                <p>
                  <Link to="/" className="text-reset">
                    Beirut, Lebanon
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div className="text-center p-4">
            © 2022 Copyright:
            <Link className="text-reset fw-bold" to="/">
              foody.com
            </Link>
          </div>
        </section>
      </footer>
    </>
  );
};

export default Footer;
