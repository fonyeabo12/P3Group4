import React from 'react';

import Card from 'react-bootstrap/Card';

function TestPropertyCard(props) {
    return (

        <Card style={{ width: '18rem' }} className="mx-auto my-3">
            <Card.Img variant="top" src={props.streetAddr} />
            <Card.Body>
                <Card.Title>
                    <h3>API Fetch Test</h3>
                </Card.Title>

                <Card.Text>
                    Will replace with realty mole API
                </Card.Text>

            </Card.Body>
        </Card>

    )
}

export default TestPropertyCard;