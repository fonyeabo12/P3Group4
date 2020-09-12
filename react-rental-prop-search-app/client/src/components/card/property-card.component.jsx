import React, { Component } from 'react';

import Card from 'react-bootstrap/Card';

import carinterior from '../../Images/car-interior.jpg';

class PropertyCard extends Component {

    render() {
        return (


        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={carinterior} />
            <Card.Body>
                <Card.Title>
                    <h3>{this.props.post.title}</h3>
                </Card.Title>

                <Card.Text>
                    {this.props.post.zipcode}
                </Card.Text>

            </Card.Body>
        </Card>

        )
    }

}

export default PropertyCard;

