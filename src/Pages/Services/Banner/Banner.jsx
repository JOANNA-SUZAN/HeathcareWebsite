import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import brushMan from '../../../Images/brushman.png';
import HeroMainbg from '../../../Images/hero-main-bg.png';
import injectTool from '../../../Images/inject-tool.png';
import inject from '../../../Images/injection.png';
import staircaseMan from '../../../Images/staircase.png';
import hosgif from '../../../Images/hospitalgif.gif';
const Banner = () => {
    return (
        <section className="banner-all text-white">
            <Container>
                <Row className="align-items-center">
                    <Col md={6} lg={6} sm={12}>
                        <div className="section-title">
                            <h1>Service Details</h1>
                        </div>
                        <div className="breadcrumb-nav">
                            <a href="/" className="text-decoration-none text-white">Home Page</a>
                            <span href="/" className="text-decoration-none text-white ml-2">Service Details</span>
                        </div>
                    </Col>
                    <Col md={6} lg={6} sm={12}>
                        <div className="hero-slide-right text-start">
                            <div className="banner-animate">
                                <img src={hosgif} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Banner;