import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Achivement.css';

const Achivement = () => {
    return (
        <section className="achivement-wrap text-white">
            <Container>
                <Row className="align-items-center">
                    <Col md={6} lg={6} sm={12}>
                        <div className="section-title">
                            <h1>Our Achievement</h1>
                        </div>
                        <div className="achivement-txt">
                            <p className="w-75">MediPlus Hospital strives for excellence in healthcare, offering compassionate treatment, cutting-edge technology, and dedicated staff committed to restoring health and fostering well-being.</p>
                            <div className="more-tool">
                            <Link to="/login"><button  className="theme-btn btn-fill">Appoinment</button></Link>
                            </div>
                        </div>
                    </Col>
                    <Col md={6} lg={6} sm={12}>
                        <Row className="achivement-funfact text-white">
                            <Col sm={6} className="text-center">
                                <div className="single-funfact">
                                    <span>22 +</span>
                                    <p>Patients</p>
                                </div>
                            </Col>
                            <Col sm={6} className="text-center">
                                <div className="single-funfact">
                                    <span>75 +</span>
                                    <p>Dentist</p>
                                </div>
                            </Col>
                            <Col sm={6} className="text-center">
                                <div className="single-funfact">
                                    <span>25 +</span>
                                    <p>Awards</p>
                                </div>
                            </Col>
                            <Col sm={6} className="text-center">
                                <div className="single-funfact">
                                    <span>28 +</span>
                                    <p>Branch</p>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Achivement;