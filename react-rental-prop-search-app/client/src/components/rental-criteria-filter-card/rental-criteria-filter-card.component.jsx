import React from 'react';

import { Card, Button, Form, Row, Col } from 'react-bootstrap';

const RentalCriteriaFilterCard = (props) => {

    const { showComponent } = props;

    return(

        <>{
            showComponent &&
            <div>

                <Card xs={4} md={4} className="m-3 text-muted border-0 shadow p-3 bg-white rounded">

                <Card.Header>Rental Criteria</Card.Header>
                <Card.Body>
                    <Card.Title>Special title treatment</Card.Title>
                    <Card.Text>
                    With supporting text below as a natural lead-in to additional content.
                    </Card.Text>

                    <Form>

                        <Form.Group as={Row} controlId="formBasicRange">
                            <Form.Label column sm="12" className="text-left">
                                Square Feet
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="range" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formBasicRange">
                            <Form.Label column sm="12" className="text-left">
                                Days Listed
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="range" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPlaintextMaxRent">
                            <Form.Label column sm="12" className="text-left">
                                Max Rent
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control type="text" placeholder="Max" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPlaintextMinRent">
                            <Form.Label column sm="12" className="text-left">
                                Min Rent
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control type="text" placeholder="Min" />
                            </Col>
                        </Form.Group>

                    </Form>

                    <Button variant="primary">Apply Filter</Button>
                </Card.Body>

                </Card>

            </div>
        }</>
    )

} 

export default RentalCriteriaFilterCard;