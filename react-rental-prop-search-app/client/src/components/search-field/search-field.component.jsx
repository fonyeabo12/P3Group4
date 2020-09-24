import React from 'react';

import {Container, Form, Button} from 'react-bootstrap';

const SearchField = (props) => (
    <Container>
    {console.log(props)}
        <Form onSubmit={(event) => props.submitIt(event)}>
            <div className="form-input">
                <input 
                    type="text"
                    name="zipcode"
                    placeholder="Enter zipcode"
                    value={props.zipcode}
                    onChange={(event) => props.handleChange(event)}
                />
            </div>
                <Button type="submit">Submit</Button>
        </Form>
    </Container>

);

export default SearchField;