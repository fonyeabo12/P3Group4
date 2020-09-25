import React from 'react';

import {save} from '../../utils/API';
import {deleteProp} from '../../utils/API';
// import save from '../../utils/API';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const TestPropertyCard = (props) => {
    
        // this.state = {
        //     street: '',
        //     beds: '',
        //     baths: '',
        //     rent: '',
        //     daysListed: ''
        // }

    const handleSave = (data) =>{
        save(data)
            .then((res) => {
                console.log('Property successfully saved!', res);
                // use bootstrap toast that says 'Saved!' or similar
                // change color of button to green
            })
            .catch((err) => {
                console.log(err)
            })
    };

    // const handleDelete = (data) => {
    //     deleteProp(data)
    //         .then((res))
    // }


        return (

            <Card style={{ width: '18rem' }} className="m-3 text-muted border-0 shadow p-3 mb-5 bg-white rounded">
                <Card.Img variant="top" src={props.streetAddr} />
                <Card.Body>
                    <Card.Title>
                        <h3>API Fetch Test</h3>
                    </Card.Title>
    
                    <Card.Text>
                        Will replace with realty mole API
                        {/* Street: {props.streetAddr.addressLine1} */}
                        {/* Bed: {props.streetAddr.bedrooms}
                        Bath: {props.streetAddr.bathrooms}
                        <hr/>
                        Rent: {props.streetAddr.price}
                        DOM: {props.streetAddr.daysOnMarket} */}
                    </Card.Text>
    
                    <Button variant="info" onClick={() => handleSave(props)} className="font-weight-bold">+</Button>{' '}
                    <Button variant="danger" className="font-weight-bold">X</Button>{' '}
    
                </Card.Body>
            </Card>

        )

};

export default TestPropertyCard;