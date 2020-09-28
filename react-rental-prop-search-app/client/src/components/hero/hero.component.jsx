import React, { Component } from 'react';

import { Container, Jumbotron } from 'react-bootstrap';

class HeroComponent extends Component {

    render() {
        return(

    <Container>

        <Jumbotron className="bg-transparent text-left mb-2 pb-2">

            <h1 className="display-3 mt-5">Rental Property Search</h1>
            <p className="mb-5">
                Enter a city and zipcode to find rental properties in your area.  
            </p>

        </Jumbotron>

    </Container>
        )
    }

};

export default HeroComponent;