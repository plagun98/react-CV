import React from 'react';
import {Row} from 'reactstrap';

const PortfolioItem = (props) => {

    return (
        <Row className = "portfolio-item">
            <a href={props.link}>{props.website}</a>
            <img src={props.imagePath} alt="Portfolio"/>
        </Row>
    );
}

export default PortfolioItem;