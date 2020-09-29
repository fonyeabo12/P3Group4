import React from 'react';

import Card from 'react-bootstrap/Card';

import carinterior from '../../Images/car-interior.jpg';

const PropertyCard = (props) => (

        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={carinterior} />
            <Card.Body>
                <Card.Title>
                    <h3>{props.post.title}</h3>
                </Card.Title>

                <Card.Text>
                    {props.post.zipcode}
                </Card.Text>

            </Card.Body>
        </Card>

);

export default PropertyCard;

