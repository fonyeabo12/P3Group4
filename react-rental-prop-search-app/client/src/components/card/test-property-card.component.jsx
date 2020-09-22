import React from 'react';

import {save} from '../../utils/API';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

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
    
                    <Button variant="info" onClick={() => handleSave(props)} className="font-weight-bold">+</Button>{' '}
                    <Button variant="danger" className="font-weight-bold">X</Button>{' '}
    
                </Card.Body>
            </Card>
    
        )

};

export default TestPropertyCard;