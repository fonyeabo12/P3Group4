import React from 'react';

import '../search-field/styles.css';

import { Container, Form, Button, Row, Col } from 'react-bootstrap';

const SearchField = (props) => (
    <Container className="searchFieldContainer">
    {console.log(props)}
        <Row className="m-3">

                <Form className="d-inline-flex" onSubmit={(event) => props.submitIt(event)}>
                    <div className="">
                        <Button variant="secondary" className="searchFieldBtn text-white border-0 shadow rounded" type="submit">Submit</Button>{' '}
                    </div>
                    <div className="ml-4 form-input justify-content-left">
                        <input 
                            type="text"
                            name="zipcode"
                            placeholder="Enter zipcode"
                            value={props.zipcode}
                            onChange={(event) => props.handleChange(event)}
                            className="col-4 border-top-0 border-left-0 border-right-0 border-bottom searchFieldForms"
                        />
                        <input 
                            type="text"
                            name="city"
                            placeholder="Enter city"
                            value={props.city}
                            onChange={(event) => props.handleChange(event)}
                            className="border-top-0 border-left-0 border-right-0 border-bottom searchFieldForms"
                        />
                    </div>
                </Form>

        </Row>
    </Container>

);

export default SearchField;