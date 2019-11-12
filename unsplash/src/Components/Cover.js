import React from 'react'
import cover from '../images/cover11.jpg';
import coverStyle from '../style/CoverStyle.js';
import Image from 'react-bootstrap/Image';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';
import { MDBCol, MDBInput, MDBIcon } from "mdbreact";
// , InputGroup, FormControl 
import '../style/Coverstyle.css';
const Cover = () => {
    return (
        <Container fluid className="jumbotron  jumbotron bg-cover">
            <div className="set0">

                <Row>
                    <Col>
                        <p className="float-left" style={coverStyle.title}>Unsplash</p>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h6 className="float-left" >
                            The internet’s source of freely useable images.
                            </h6>
                        <br />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h6 className="float-left" >
                            Powered by creators everywhere.
                            </h6>
                    </Col>
                </Row>

                {/* <div className="form-group">
                        <label htmlFor="example1">Large input</label>
                        <input type="text" id="example1" className="form-control form-control-lg" />
                    </div> */}
            </div>
            <MDBCol md="6" className="main-search">
                <div className="input-group md-form form-sm form-1 pl-0">
                    <div className="input-group-prepend">
                        <span className="input-group-text purple lighten-3">
                            <MDBIcon className="text-black" icon="search" />
                        </span>
                    </div>
                    <input className="form-control my-0 py-1 main-s" type="text"
                        placeholder="Search free high-resolution photos" aria-label="Search" />
                </div>
            </MDBCol>
        </Container>

    )
}

export default Cover

{/* <div className="cover-photo">
            <Image src={cover} fluid className="cover" />
            <Container>
                <div className="cover-content">
                    <div className="cover-heading">
                        <Row>
                            <Col sm={12} md={12}>
                                <div style={coverStyle.title}>Unsplash</div>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} md={12}>
                                <div style={coverStyle.textStyle}>
                                    The internet’s source of freely useable images.
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} md={12}>
                                <div style={coverStyle.textStyle1} >
                                    Powered by creators everywhere.
                            </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm={12} md={8}>
                                <div className="asd">
                                    <button style={coverStyle.searchButton}>
                                        <i className="fas fa-search" />
                                    </button>
                                    <input
                                        className="coverSearchBox"
                                        type="text"
                                        placeholder="Search free high-resolution photos"
                                    />
                                </div>
                            </Col>
                        </Row>
                        <div className="trending">
                            <p>Trending: <span>flower, wallpapers, backgrounds, happy, love</span></p>
                        </div>
                    </div>
                </div>
            </Container>
        </div> */}

{/* <div className="cover-photo">
            <Image src={cover} fluid className="cover" />
            <Container>
                <div className="cover-content">
                    <div className="cover-heading">
                        <div style={coverStyle.title}>Unsplash</div>

                        <div style={coverStyle.textStyle}>
                            The internet’s source of freely useable images.
                        </div>

                        <div style={coverStyle.textStyle1} >
                            Powered by creators everywhere.
                    </div>
                    </div>

                    <div className="asd">
                        <InputGroup size="lg" className="mb-3">
                            <InputGroup.Prepend>
                                <InputGroup.Text>< i className="fas fa-search" style={coverStyle.searchButton} /></InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl aria-label="Large" aria-describedby="inputGroup-sizing-sm" className="search-input" />
                        </InputGroup>
                    </div>
                </div>
            </Container>
        </div> */}