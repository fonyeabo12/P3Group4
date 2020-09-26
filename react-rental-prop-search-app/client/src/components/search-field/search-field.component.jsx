import React from 'react';

import { Container, Form, Button, Row, Col } from 'react-bootstrap';

const SearchField = (props) => (
    <Container>
    {console.log(props)}
        <Row className="m-5">

                <Form onSubmit={(event) => props.submitIt(event)}>
                    <div className="form-input justify-content-left">
                        <input 
                            type="text"
                            name="zipcode"
                            placeholder="Enter zipcode"
                            value={props.zipcode}
                            onChange={(event) => props.handleChange(event)}
                            className="border-top-0 border-left-0 border-right-0 border-bottom m-3"
                        />
                        <input 
                            type="text"
                            name="city"
                            placeholder="Enter city"
                            value={props.city}
                            onChange={(event) => props.handleChange(event)}
                            className="border-top-0 border-left-0 border-right-0 border-bottom m-3"
                        />
                    </div>
                    <Button variant="secondary" className="m-3 p-3 text-white border-0 shadow rounded" type="submit">Submit</Button>{' '}
                </Form>

        </Row>
    </Container>

);

export default SearchField;