import React, { Component } from 'react';

import Card from 'react-bootstrap/Card';

class PropertyCard extends Component {
    // constructor(props) {
    //     super(props)
    // };

    // testDisplayPropertySearch = (posts) => {
    //     if (!posts.length) return null;

    //     return posts.map((post, index) => {



    //     })
    // }

    // this = {
    //     props: {
    //         post: {
    //               title: 'adfad',
    //               body: 'blah blah blah'
    //             }
    //     }
    // }


    render() {
        return (


        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
                <Card.Title>
                    <h3>{this.props.post.title}</h3>
                </Card.Title>

                <Card.Text>
                    {this.props.post.body}
                </Card.Text>

            </Card.Body>
        </Card>

        )
    }

}

export default PropertyCard;

// export const PropertyCard = props => (
//     <div className='card-container'>

//         <Card style={{ width: '18rem' }}>
//             <Card.Img variant="top" src="" />
//             <Card.Body>
//                 <Card.Title>
//                     <h2> {props.posts.title} </h2>
//                 </Card.Title>
//                 <Card.Text>
//                     {props.monster.body} 
//                     {props.monster.zipcode} 
//                     {props.monster.numberOfBeds} 
//                     {props.monster.numberOfBaths} 
//                 </Card.Text>
//             </Card.Body>
//         </Card>

//     </div>
// );