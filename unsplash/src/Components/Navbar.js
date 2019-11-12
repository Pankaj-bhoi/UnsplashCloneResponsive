import React from 'react'
import navStyle from '../style/NavStyle';
import '../style/NavbarStyle.css'
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import { MDBCol, MDBInput, MDBIcon } from "mdbreact";
// NavDropdown, Form, FormControl, Button
const NavigationBar = () => {

  return (
    <Navbar bg="light" expand="lg" fixed="top" >
      <Navbar.Brand href="#home">Logo</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <MDBCol md="6">
          <div className="input-group">
            <span className="input-group-append">
              <i className="fa fa-search"></i>
            </span>
            <input className="form-control rounded-pill" type="search"
              placeholder="Search free high-resolution photos"
              id="example-search-input" />
          </div>
        </MDBCol>
        <Nav className="mr-auto ">
          <Nav.Link href="#collections" className="right-menu">Collections</Nav.Link>
          <Nav.Link href="#explore" className="right-menu">Explore</Nav.Link>
          <Nav.Link href="#explore" className="dots"><i className="fas fa-ellipsis-h" /></Nav.Link>
          <div style={navStyle.submitPhoto}>
            <button style={navStyle.submitButton} className="submitButton">Submit a photo</button>
          </div>
          <Nav.Link href="#explore" className="login">Login</Nav.Link>
          <div style={navStyle.submitPhoto}>
            <button style={navStyle.joinFree}>Join Free</button>
          </div>
        </Nav>

      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavigationBar;

{/* 

  *<div className="input-group md-form form-sm form-1 pl-0">
            <div className="input-group-prepend">
              <span className="input-group-text purple lighten-3" id="basic-text1">
                <MDBIcon icon="search" />
              </span>
            </div>
            <input className="form-control rounded-pill" type="text" placeholder="Search" aria-label="Search" />
          </div> 

  <div style={navStyle.inputDiv}>
          <button style={navStyle.searchButton} className="search-button">
            <i className="fas fa-search" />
          </button>
          <input
            style={navStyle.inputBox}
            type="text"
            placeholder="Search free high-resolution photos"
            className="inputBox"
          />
        </div>
  
  
  
  
  <div style={navStyle.inputDiv}>
        <button style={navStyle.searchButton}>
          <i className="fas fa-search" />
        </button>
        <input
          style={navStyle.inputBox}
          type="text"
          placeholder="Search free high-resolution photos"
          className="inputBox"
        />
      </div>
      <div className="clickable-element">
        <ul className="Link-Element">
          <li style={navStyle.listElement}>
            <a href="/" style={navStyle.anchorDiv}>
              Collections
                </a>
          </li>
          <li style={navStyle.listElement}>
            <a href="/" style={navStyle.anchorDiv}>
              Explore
                </a>
          </li>
        </ul>
      </div>
      <div style={navStyle.navElements}>
        <div style={navStyle.submitPhoto}>
          <button style={navStyle.submitButton} className="submitButton">Submit a photo</button>
        </div>
        <div style={navStyle.barDiv}>
          <span style={navStyle.bar}></span>
        </div>
      </div> */}

    //   <Container>
    //   <Row>
    //     <Col>
    //       <Navbar style={navStyle.navbar}>
    //         <Nav>
    //           <Col md={6} >
    //             <div style={navStyle.inputDiv}>
    //               <button style={navStyle.searchButton}>
    //                 <i className="fas fa-search" />
    //               </button>
    //               <input
    //                 style={navStyle.inputBox}
    //                 type="text"
    //                 placeholder="Search free high-resolution photos"
    //                 className="inputBox"
    //               />
    //             </div>
    //           </Col>
    //           <div className="clickable-element">
    //             <ul className="Link-Element">
    //               <li style={navStyle.listElement}>
    //                 <a href="/" style={navStyle.anchorDiv}>
    //                   Collections
    //             </a>
    //               </li>
    //               <li style={navStyle.listElement}>
    //                 <a href="/" style={navStyle.anchorDiv}>
    //                   Explore
    //             </a>
    //               </li>
    //               <li style={navStyle.listElement}>
    //                 <a href="/" style={navStyle.anchorDiv}>
    //                   <i className="fas fa-ellipsis-h" />
    //                 </a>
    //               </li>
    //             </ul>
    //           </div>
    //         </Nav>
    //       </Navbar>
    //     </Col>
    //   </Row>
    // </Container>