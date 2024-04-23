import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import expertDentist from '../../../Images/experienceddentist.png';
import './Dentist.css';

const Dentist = () => {
    return (
        <section className='expert-dentist'>
            <Container>
                <Row className="align-items-center">
                    <Col lg={6}>
                        <img src={expertDentist} alt="expertDoctors" className="img-fluid" />
                    </Col>
                    <Col lg={6}>
                        <div className="expertDentist-txt mt-5 mt-lg-0">
                            <h2>Experienced Doctors</h2>
                            <p>At MediPlus, our team of experienced doctors brings together a wealth of expertise and dedication to provide exceptional care to our patients. With years of specialized training and clinical experience, our physicians are leaders in their respective fields, committed to delivering personalized and compassionate healthcare to every individual we serve.<br></br>From board-certified specialists to skilled primary care physicians, our diverse medical staff is united by a common goal: your health and well-being. Whether you're seeking routine medical care or treatment for a complex health condition, you can trust our doctors to provide the highest standard of care with professionalism and empathy.<br></br>Get to know our team of expert physicians and discover the difference they can make in your healthcare journey. Your health is our priority at MediPlus.</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Dentist;