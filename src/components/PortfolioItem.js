import React from 'react';
import {Row, Col} from 'reactstrap';

const PortfolioItem = (props) => {

    return (
        <Row className = "portfolio-item">
            <Col sm={{size: 12, offset: 0}} xs={{size: 10, offset: 1}}>
                <a href={props.link}>{props.website}</a>
                <img src={props.imagePath} alt="Portfolio"/>
            </Col>
            
        </Row>
    );
}

export default PortfolioItem;