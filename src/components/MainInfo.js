import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneVolume, faEnvelope, faMapPin } from '@fortawesome/free-solid-svg-icons'
import { faTelegramPlane, faLinkedin, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import {
  Card, CardImg, CardBody, Row, Col
} from 'reactstrap';

const MainInfo = (props) => {
  return (
    <div id="main-info">
        <Row>
            <Col lg={{size: 8, offset: 2}} md={{size: 12, offset: 0}}>
            <Card>
                <Row className="no-gutters">
                    <Col md="8">
                        <CardBody className="main-info-body">
                            <h2 className="main-info__title">Plahun Aleksandr</h2>
                            <h3 className="main-info__text">Junior Front-end developer</h3>
                            <ul className="main-info__list">
                                <li className="main-info__text"><FontAwesomeIcon icon={faEnvelope}/>plagun98@gmail.com</li>
                                <li className="main-info__text"><FontAwesomeIcon icon={faPhoneVolume}/>+380932233635</li>
                                <li className="main-info__text"><FontAwesomeIcon icon={faTelegramPlane}/>@AlexPlg</li>
                                <li className="main-info__text"><FontAwesomeIcon icon={faMapPin}/>Kyiv, Ukraine</li>
                            </ul>
                            <Row className="social-links">
                                <a href="https://www.linkedin.com/in/александр-плагун-a021a7170/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin}/></a>
                                <a href="https://www.instagram.com/alexandr_plagun/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram}/></a>
                                <a href="https://t.me/AlexPlg" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTelegramPlane}/></a>
                                <a href="https://github.com/plagun98" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub}/></a>
                            </Row>
                        </CardBody>
                    </Col>
                    <Col className="right-side" md="4">
                        <CardImg src={require("../img/profile.jpg")} alt="Card image cap" />
                    </Col>
                </Row>
            </Card>
            </Col>
        </Row>
    </div>
  );
};

export default MainInfo;