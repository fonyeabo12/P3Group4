import React, { useState, useEffect } from "react";
import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

function Properties() {
    // Setting our component's initial state
    const [properties, setProperties] = useState([])
    const [formObject, setFormObject] = useState({})

    // Load all properties and store them with setProperties
    useEffect(() => {
        loadProperties()
    }, [])

    // Loads all properties and sets them to properties
    function loadProperties() {
        API.getProperties()
            .then(res =>
                setProperties(res.data)
            )
            .catch(err => console.log(err));
    };

    // Deletes a property from the database with a given id, then reloads properties from the db
    function deleteProperty(id) {
        API.deleteProperty(id)
            .then(res => loadProperties())
            .catch(err => console.log(err));
    }

    // Handles updating component state when the user types into the input field
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value })
    };

    // When the form is submitted, use the API.saveProperty method to save the property data
    // Then reload properties from the database
    function handleFormSubmit(event) {
        event.preventDefault();
        
            let newProperty = {
                addressLine1: formObject.addressLine1,
                propertyType: formObject.propertyType,
                bedrooms: formObject.bedrooms,
                bathrooms: formObject.bathrooms,
                lotSize: formObject.lotSize,
                yearBuilt: formObject.yearBuilt
            }
            console.log(newProperty) 
            API.saveProperty(newProperty)
                .then(res =>{ 
                    console.log(res)
                    loadProperties()})
                .catch(err => console.log(err));
        
    };

    return (
        <Container fluid>
            <Row>
                <Col size="md-6">
                    <Jumbotron>
                        <h1>What Properties Should I See?</h1>
                    </Jumbotron>
                    <form>
                        <Input
                            onChange={handleInputChange}
                            name="addressLine1"
                            placeholder="Address (required)"
                        />
                        <Input
                            onChange={handleInputChange}
                            name="propertyType"
                            placeholder="Property Type (required)"
                        />
                        <Input
                            onChange={handleInputChange}
                            name="bedrooms"
                            placeholder="Bedrooms (required)"
                        />
                        <Input
                            onChange={handleInputChange}
                            name="bathrooms"
                            placeholder="Bathrooms (required)"
                        />
                        <Input
                            onChange={handleInputChange}
                            name="lotSize"
                            placeholder="Lot Size (required)"
                        />
                        <Input
                            onChange={handleInputChange}
                            name="yearBuilt"
                            placeholder="Year Built (required)"
                        />
                        <FormBtn
                            
                        onClick={handleFormSubmit}
                        >
                            Submit Property
                </FormBtn>
                    </form>
                </Col>
                {/*<Col size="md-6 sm-12">
                    <Jumbotron>
                        <h1>Properties On My List</h1>
                    </Jumbotron>
                    {properties.length ? (
                        <List>
                            {properties.map(property => (
                                <ListItem key={property._id}>
                                    <Link to={"/properties/" + property._id}>
                                        <strong>
                                            {property.addressLine1} : {property.bedrooms} : {property.bathrooms}
                                        </strong>
                                    </Link>
                                    <DeleteBtn onClick={() => deleteProperty(property._id)} />
                                </ListItem>
                            ))}
                        </List>
                    ) : (
                            <h3>No Results to Display</h3>
                        )}
                </Col>*/}
            </Row>
        </Container>
    );
}


export default Properties;
