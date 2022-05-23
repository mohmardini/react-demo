import React from 'react'
import {AiFillFacebook,AiFillInstagram,AiFillGoogleSquare}  from 'react-icons/ai';

const Footer = () => {
  return (
    <>
      <footer className="footer text-center">
      
      <section className="d-flex  justify-content-between p-4 border-bottom">

          <div className="me-5 d-none d-lg-block">
              <span>Get connected with us on social networks:</span>
          </div>

          <div>
              <a href="" className="me-4 text-reset">
                  <AiFillFacebook size={30} ></AiFillFacebook>
              </a>
              <a href="" className="me-4 text-reset">
                  <AiFillInstagram size={30}></AiFillInstagram>
              </a>
              <a href="" className="me-4 text-reset">
                  <AiFillGoogleSquare size={30}></AiFillGoogleSquare>
              </a>
          </div>

      </section>

      <section className="">
          <div className="container text-center text-md-start mt-5">

          <div className="justify-content-center row mt-3">
              <div className="col-md-2">
                    <h6 className="text-uppercase mb-4">
                        Products
                    </h6>
                    <p>
                        <a href="#!" className="text-reset">Test</a>
                    </p>
                    <p>
                        <a href="#!" className="text-reset">Test</a>
                    </p>
                    <p>
                        <a href="#!" className="text-reset">Test</a>
                    </p>
                    <p>
                        <a href="#!" className="text-reset">Test</a>
                    </p>
              </div>
              <div className="col-md-5">
                    <h6 className="text-uppercase fw-bold mb-4">
                        Useful links
                    </h6>
                    <p>
                        <a href="#!" className="text-reset">Test</a>
                    </p>
                    <p>
                        <a href="#!" className="text-reset">Test</a>
                    </p>
                    <p>
                        <a href="#!" className="text-reset">Test</a>
                    </p>
                    <p>
                        <a href="#!" className="text-reset">Test</a>
                    </p>
              </div>
              <div className="col-md-3">
                    <h6 className="text-uppercase fw-bold mb-4">
                        Contact us
                    </h6>
                    <p>
                        <a href="#!" className="text-reset">info@foody</a>
                    </p>
                    <p>
                        <a href="#!" className="text-reset">+76 362 7362</a>
                    </p>
                    <p>
                        <a href="#!" className="text-reset">Beirut, Lebanon</a>
                    </p>
              </div>
            </div>

          </div>

          <div className="text-center p-4" >
              © 2022 Copyright:
              <a className="text-reset fw-bold" href="#">foody.com</a>
          </div>

      </section>
     
      </footer>
    </>
  )
}

export default Footer