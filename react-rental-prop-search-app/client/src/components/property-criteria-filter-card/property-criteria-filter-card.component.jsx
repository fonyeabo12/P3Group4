import React from 'react';

import { Card, Button, Form, Row, Col } from 'react-bootstrap';

const PropertyCriteriaFilterCard = () => (

    <div>

        <Card>

        <Card.Header>Property Criteria</Card.Header>
        <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
            With supporting text below as a natural lead-in to additional content.
            </Card.Text>

            <Form>

                <Form.Group as={Row} controlId="exampleForm.SelectCustom">
                    <Form.Label column sm="2">
                        Bedrooms
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control as="select" custom>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        </Form.Control>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="exampleForm.SelectCustom">
                    <Form.Label column sm="2">
                        Bathrooms
                    </Form.Label>
                    <Col sm="10">
                        <Form.Control as="select" custom>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        </Form.Control>
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextCity">
                    <Form.Label column sm="2">
                        City
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control type="text" placeholder="Enter City" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextState">
                    <Form.Label column sm="2">
                        State
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control type="text" placeholder="Enter State" />
                    </Col>
                </Form.Group>

                <Form.Group as={Row} controlId="formPlaintextState">
                    <Form.Label column sm="2">
                        Zipcode
                    </Form.Label>
                    <Col sm="10">
                    <Form.Control type="text" placeholder="Enter Zipcode" />
                    </Col>
                </Form.Group>

            </Form>

            <Button variant="primary">Apply Filter</Button>
        </Card.Body>

        </Card>

    </div>

);

export default PropertyCriteriaFilterCard;