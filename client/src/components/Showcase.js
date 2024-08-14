import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import img from '../assets/bg/hero.png'
import { getAllCard} from '../api/ApiService'
import React, { useEffect, useState } from 'react';



const Showcase = () => {

  const [cards, setCards] = useState([])

  useEffect(() => {
      loadCard()
  }, [])

  const loadCard = async () => {
    try {
      const data = await getAllCard();
      setCards(data.payload); // Ensure that payload is an array of card data
    } catch (error) {
      console.error('Error fetching cards:', error);
    }
  };

  return (
    <Card className='card'>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        {cards.length > 0 ? (
          <>
            {cards.map((cards) => (
              <div key={cards.id}> {/* Added a key prop for each item */}
                <Card.Title>{cards.name}</Card.Title>
                <Card.Text>{cards.description}</Card.Text>
                <Button variant="primary" href={cards.link}>Link</Button>
              </div>
            ))}
          </>
        ) : (
          <Card.Text>No cards available.</Card.Text>
        )}
      </Card.Body>
    </Card>
  );
};


export default Showcase