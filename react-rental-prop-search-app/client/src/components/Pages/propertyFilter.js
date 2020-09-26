import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// import Navbar from "../Navbar";
// import '../../App.css';
import PropertyCriteriaFilterCard from '../property-criteria-filter-card/property-criteria-filter-card.component';
import RentalCriteriaFilterCard from '../rental-criteria-filter-card/rental-criteria-filter-card.component.jsx';


class propertyFilter extends React.Component {

    render() {
        return (

            <Row>
                <Col xs={6} md={5} className="mx-auto my-4">
                    <PropertyCriteriaFilterCard />
                </Col>

                <Col xs={6} md={5} className="mx-auto my-4">
                    <RentalCriteriaFilterCard />
                </Col>
            </Row>

        )
    }

}

export default propertyFilter;