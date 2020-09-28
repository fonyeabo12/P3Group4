import React from 'react';

import { Card, Button, Form, Row, Col } from 'react-bootstrap';



const PropertyCriteriaFilterCard = (props) => {

    const { showComponent } = props;

    return (

        <>{
            showComponent &&

            <div>

                <Card xs={6} md={4} className="m-3 text-muted border-0 shadow p-3 bg-white rounded">

                <Card.Header>Property Criteria</Card.Header>
                <Card.Body>
                    <Card.Title>Filter Parameters</Card.Title>
                    <Card.Text>
                        Use the dropdown menus and forms below to refine your property search.
                    </Card.Text>

                    <Form>

                        <Form.Group as={Row} controlId="exampleForm.SelectCustom">
                            <Form.Label column sm="12" className="text-left">
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
                            <Form.Label column sm="12" className="text-left">
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
                            <Form.Label column sm="12" className="text-left">
                                City
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control type="text" placeholder="Enter City" />
                            </Col>
                        </Form.Group>

                        <Form.Group as={Row} controlId="formPlaintextState">
                            <Form.Label column sm="12" className="text-left">
                                State
                            </Form.Label>
                            <Col sm="10">
                            <Form.Control type="text" placeholder="Enter State" />
                            </Col>
                        </Form.Group>

                    </Form>

                    <Button variant="primary">Apply Filter</Button>
                </Card.Body>

                </Card>

            </div>
        }</>
    )
};

export default PropertyCriteriaFilterCard;