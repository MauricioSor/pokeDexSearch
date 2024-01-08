import React from 'react';
import { Card } from 'react-bootstrap';

const Pokemon = ({ item }) => {
    

    console.log(item.data.sprites.front_default)
    return (
        <>
            <Card>
                <Card.Img variant="top" src={item.data.sprites.front_default} />
                <Card.Body>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
            
        </>
    );
};

export default Pokemon;