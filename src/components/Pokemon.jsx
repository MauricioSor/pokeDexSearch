import React from 'react';
import { Card } from 'react-bootstrap';

const Pokemon = ({ item }) => {
    console.log(item.data)
    return (
        <>
{/*             <Card>
                <Card.Img variant="top" src={item.moves.sprites.other.home.front_default} />
                <Card.Body>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
            <br />
            <Card>
                <Card.Body>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
                <Card.Img variant="bottom" src={item.moves.sprites.other.home.front_default} />
            </Card> */}
            <div></div>
        </>
    );
};

export default Pokemon;