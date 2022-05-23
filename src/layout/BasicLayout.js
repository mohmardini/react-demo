import React from 'react'
import { Container, Image } from 'react-bootstrap'
import Footer from './Footer'


const BasicLayout = (props) => {
  return (
    <>
    {/* Nav Bar */}
    <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 mx-auto "><Image src="/icons/logo.png" alt="bg image"  fluid  style={{width:110}}/></span>
    </nav>

    {/* Bg Image */}
    <div className='bg-header'></div>

    {/* children */}
    <Container>
    {props.children}
    </Container>

    <Footer></Footer>
    </>

  )
}

export default BasicLayout